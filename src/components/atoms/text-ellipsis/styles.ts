import styled from 'styled-components';
import { ITextEllipsis } from '.';


export const Ellipsis = styled.div<ITextEllipsis>`
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ rows }) => rows};
  display: -webkit-box;
`;
