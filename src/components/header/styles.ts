import styled from "styled-components";

import { Button, Separator, Text } from '@radix-ui/themes';

export const ContainerDevelopBy = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Continer = styled.div`
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
