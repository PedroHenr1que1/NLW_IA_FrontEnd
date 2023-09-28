import styled from 'styled-components';

import { Button, Separator, TextArea, Select, Slider } from '@radix-ui/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex: 1;
  padding: 24px ;
  gap: 24px;
`;

export const ContainerTextAreas = styled.div`
  display: grid;
  grid-row: 2;
  gap: 16px;
  flex: 1;
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