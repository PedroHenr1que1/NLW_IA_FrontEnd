import { ChangeEvent, FormEvent, Fragment, useMemo, useRef, useState } from 'react';

import { FileVideo, Upload } from 'lucide-react';

import {
  Container,
  ConfirmButton,
  ContainerDescriptions,
  HorizontalDivider,
  Title,
  TranscriptionPrompt,
  Thumbnail,
  VideoInput
} from './styles';

import { api } from '../../lib/axios';
import { getFFmpeg } from '../../lib/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

import * as Notification from "../../utils/Notifications";

type Status = "waiting" | "converting" | 'uploading' | 'generating'

export function VideoForm() {
  const [getVideoFile, setVideoFile] = useState<File | null>(null);
  const [getProgress, setProgress] = useState<number>(0);
  const [getStatus, setStatus] = useState<Status>("waiting");

  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  const StatusMessage = {
    converting: `Convertendo ${getProgress}%`,
    uploading: "Carregando...",
    generating: "Transcrevendo...",
  }

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.currentTarget

    if(!files){
      return
    }

    const selectedFile = files[0]

    setVideoFile(selectedFile)
  }

  async function handleConvertVideoToAudio(video: File){
    console.log('Convert starting...')

    const ffmpeg = await getFFmpeg()

    await ffmpeg.writeFile('input.mp4', await fetchFile(video))

    ffmpeg.on('progress', progress => {
      console.log('Convert progress:' + Math.round(progress.progress * 100)) 
      setProgress(Math.round(progress.progress * 100))
    })

    await ffmpeg.exec([
      '-i',
      'input.mp4',
      '-map',
      '0:a',
      '-b:a',
      '20k',
      '-acodec',
      'libmp3lame',
      'output.mp3',
    ])

    const nameFile = video.name.split(".mp4")[0]

    const data = await ffmpeg.readFile('output.mp3')

    const audioFileBlob = new Blob([data], { type: 'audio/mpeg' })
    const audioFile = new File([audioFileBlob], `${nameFile}.mp3`, { type: 'audio/mpeg' }) 

    console.log('Convert finished')

    return audioFile
  }

  async function handleUploadVideo(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if(!getVideoFile){
      Notification.Info("Selecione um vídeo para prosseguir! 😉", 2500)
      return
    }

    setStatus("converting")

    const audioFile = await handleConvertVideoToAudio(getVideoFile)

    const data = new FormData()

    data.append('file', audioFile)

    setStatus("uploading")

    const ResponseUploadVideo = await api.post('/videos', data)

    if(Math.floor(ResponseUploadVideo.status / 100) === 2){
      Notification.Sucess("Upload do vídeo concluído! 😁", 2500)
    } else {
      Notification.Error("Houve algum erro ao fazer upload! 😨", 2500)
      setStatus('waiting')
    }

    const videoId = ResponseUploadVideo.data.video.id

    setStatus("generating")

    const ResponseGenerateTranscription = await api.post(`/videos/${videoId}/transcription`, {prompt})

    if(Math.floor(ResponseGenerateTranscription.status / 100) === 2){
      Notification.Sucess("Transcrição gerada com sucesso! 😁", 2500)
      setStatus('waiting')
    }else {
      Notification.Error("Houve algum erro ao gerar a transcrição! 😨", 2500)
      setStatus('waiting')
    }

  }

  const previewURL = useMemo(() => {
    if(!getVideoFile){
      return null
    }

    return URL.createObjectURL(getVideoFile)
  }, [getVideoFile])

  return (
    <Container onSubmit={handleUploadVideo}>
      <Title htmlFor='video'>
        {previewURL ? (
          <Thumbnail src={previewURL} controls={false}/>
        ) : (
          <Fragment>
            <FileVideo width={32} height={32}/>
            Selecione um vídeo...
          </Fragment>
        )}
      </Title>

      <VideoInput 
        type='file'
        id='video'
        accept='video/mp4'
        onChange={handleFileSelected}
      />

      <HorizontalDivider orientation='horizontal'/>

      <ContainerDescriptions>
        <label htmlFor='transcriptionPrompt'>Prompt de transcrição</label>
        <TranscriptionPrompt 
          ref={promptInputRef}
          disabled={getStatus !== "waiting"}
          id='transcriptionPrompt'
          placeholder='Incluia palavras-chave contidas no vídeo saparadas por vígula (,)'
        />
      </ContainerDescriptions>
      <ConfirmButton 
        type='submit'
        disabled={getStatus !== "waiting"}
      >
        {getStatus === "waiting" ? (
          <Fragment>
            Carregar vídeo
            <Upload width={16} height={16}/>
          </Fragment>
        ) : (
          StatusMessage[getStatus]
        )}
        
      </ConfirmButton>
    </Container>
  )
}