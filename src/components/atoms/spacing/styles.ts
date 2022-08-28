import styled from "styled-components";
import { ISpacing } from ".";

export const Space = styled.div<ISpacing>`
  width: ${({horizontal}) => `${horizontal || 0}px`};
  height: ${({vertical}) => `${vertical || 0}px`};
`