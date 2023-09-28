import { Wand2 } from 'lucide-react';
import { Text } from '@radix-ui/themes'

import {
  Container,
  ContainerContent,
  ContainerTextAreas,
  ContainerModel,
  ContainerTemperature,
  ContainerPrompt,
  MainContent,
  Sidebar,
  HorizontalDivider,
  Description,
  PromptIA,
  ResultIA,
  PromptForm,
  SelectModel,
  SelectPlaceholder,
  SelectContent,
  SelectItem,
  Warning,
  TemperatureSlider,
  ExecuteButton
} from './styles';

import { Header} from '../components/header/header';
import { VideoForm } from '../components/videoForm/videoForm';

export function Home() {
  return (
    <Container>
      <Header/>

      <ContainerContent>
        <MainContent>
          <ContainerTextAreas>
            <PromptIA
              placeholder='Inclua o prompt para a IA...'
            />
            <ResultIA 
              placeholder='Resultado gerado pela IA...' 
              readOnly
            />
          </ContainerTextAreas>
          <Description>Você pode adicionar a variável <Text color='ruby'>{'{transcription}'}</Text> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.</Description>
        </MainContent>

        <Sidebar>
          <VideoForm/>
          
          <HorizontalDivider orientation='horizontal'/>

          <PromptForm>
            <ContainerPrompt>
              <label>Prompt</label>
              <SelectModel >
                <SelectPlaceholder placeholder='Selecione um prompt...'/>
                <SelectContent>
                  <SelectItem value='Title'>Título do Youtube</SelectItem>
                  <SelectItem value='Description'>Descrição do Youtube</SelectItem>
                </SelectContent>
              </SelectModel>
            </ContainerPrompt>

            <ContainerModel>
              <label>Modelo</label>
              <SelectModel defaultValue='gpt3.5'>
                <SelectPlaceholder/>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </SelectModel>
            </ContainerModel>

            <HorizontalDivider orientation='horizontal'/>

            <ContainerTemperature>
              <label>Temperatura</label>
              <TemperatureSlider
                variant='soft'
                radius='full'
                min={0}
                max={1}
                step={0.1}
                defaultValue={[0.5]}
              />
              <Warning>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</Warning>
            </ContainerTemperature>

            <HorizontalDivider orientation='horizontal'/>

            <ExecuteButton type='submit'>
              Executar
              <Wand2 width={16} height={16}/>
            </ExecuteButton>
          </PromptForm>
        </Sidebar>
      </ContainerContent>
    </Container>
  );
}
