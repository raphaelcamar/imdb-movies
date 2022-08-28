import styled from "styled-components";
import { IMetaScore } from ".";

export const getScoreColor = (score: number) => {
  if(score >= 80) return '#12B76A';
  if(score <= 50) return '#F04438'

  return '#F79009'
}

export const Score = styled.p<IMetaScore>`
  color: ${({ score }) => getScoreColor(score)};
  font-weight: bold;
  font-size: 26px;
`
