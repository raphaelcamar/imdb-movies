import styled from "styled-components";
import { IInfoLine } from ".";

export const Line = styled.div<IInfoLine>`
  background-color: ${({ isBlank }) => isBlank ? 'transparent' : ' #F3F4F6'};
  color: #36344B;
  padding: 6px 16px;
  font-weight: 400;
  min-height: 36px;
  border-radius: 4px;
`