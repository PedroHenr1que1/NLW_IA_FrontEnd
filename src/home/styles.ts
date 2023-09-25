import styled from 'styled-components';

import { Button, Separator, Text, TextArea, Select, Slider } from '@radix-ui/themes'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex: 1;
  padding: 24px ;
  gap: 24px;
`;

export const ContainerDevelopBy = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ContainerTextAreas = styled.div`
  display: grid;
  grid-row: 2;
  gap: 16px;
  flex: 1;
`;

export const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContainerModel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContainerPrompt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContainerTemperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
  border-bottom: 0.5px solid grey;
`;

export const DevelopBy = styled(Text)`
  color: grey;
`;

export const GitHubButton = styled(Button)`
  cursor: pointer;
`;

export const VerticalDivider = styled(Separator)`
  height: 20px;
`;

export const HorizontalDivider = styled(Separator)`
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

export const Sidebar = styled.aside`
display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
`;

export const Description = styled.p`
  color: grey;
  font-size: 12px;
`;

export const PromptIA = styled(TextArea)`
  resize: none;
  padding: 16px;
`;

export const ResultIA = styled(TextArea)`
  resize: none;
  padding: 20px;
`;

export const TranscriptionPrompt = styled(TextArea)`
  resize: vertical;
  ::placeholder{
    font-size: 12px;
  }
`;

export const VideoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const VideoInput = styled.input`
  display: none;
`;

export const Title = styled.label`
  display: flex;
  width: 100%;
  cursor: pointer;
  border: 1px dashed grey;
  border-radius: 8px;
  aspect-ratio: 16 / 9;
  font-size: 14px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: gray;
  &:hover{
    background-color: #8F364B4D;
    transition: 0.25s;
  }
  &:not(:hover){
    background-color: transparent;
    transition: 0.25s;
  }
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  cursor: pointer;
`;

export const PromptForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SelectModel = styled(Select.Root)`

`;

export const SelectPlaceholder = styled(Select.Trigger)``;

export const SelectContent = styled(Select.Content)``;

export const SelectItem = styled(Select.Item)``;

export const Warning = styled.span`
  display: block;
  font-style: italic;
  font-size: 12px;
  color: grey;
`;

export const TemperatureSlider = styled(Slider)`

`;

export const ExecuteButton = styled(Button)`
  width: 100%;
  cursor: pointer;
`;