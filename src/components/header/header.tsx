import { Github} from 'lucide-react';

import {
  ContainerDevelopBy,
  Continer,
  DevelopBy,
  GitHubButton,
  VerticalDivider
} from './styles'

export function Header() {
  return (
    <Continer>
      <h1>Transcription.AI</h1>

      <ContainerDevelopBy>
        <DevelopBy as='span'>Developed by PedroHenr1que1</DevelopBy>
        <VerticalDivider orientation='vertical'/>
        <GitHubButton 
          onClick={() => {window.open("https://github.com/PedroHenr1que1")}}
          variant='surface'
        >
          <Github width={16} height={16}/>
          Github
        </GitHubButton>
      </ContainerDevelopBy>
    </Continer>
  )
}