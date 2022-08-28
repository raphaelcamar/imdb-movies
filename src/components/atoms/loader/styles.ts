import styled, { keyframes } from "styled-components";
import { ILoader } from ".";

type LoaderType  = ILoader & {
  animationDelay: number
}

export const Root = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const Bounce = keyframes`
  from { transform: translateY(-0.3rem);  }
  to { transform: translateY(0.3rem);  }
`;

export const Circle = styled.div<LoaderType>`
  width: ${({ size }) => size || 10}px;
  height: ${({ size }) => size || 10}px;
  border-radius: 50%;
  transform: translateY(-0.3rem);
  background: #2E90FA;
  animation: ${Bounce} 0.8s ease-in-out infinite alternate forwards;
  animation-delay: ${({ animationDelay }) => animationDelay}s;
`;
