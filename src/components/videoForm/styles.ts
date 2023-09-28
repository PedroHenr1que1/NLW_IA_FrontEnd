import styled from 'styled-components';

import { Button, TextArea, Separator } from '@radix-ui/themes';

export const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.label`
  display: flex;
  position: relative;
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

export const TranscriptionPrompt = styled(TextArea)`
  resize: vertical;
  ::placeholder{
    font-size: 12px;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const VideoInput = styled.input`
  display: none;
`;

export const ConfirmButton = styled(Button)`
  width: 100%;
  cursor: pointer;
`;

export const HorizontalDivider = styled(Separator)`
  width: 100%;
`;

export const Thumbnail = styled.video`
  pointer-events: none;
  position: absolute;
  width: 101.5%;
  border-radius: 8px;
`;
