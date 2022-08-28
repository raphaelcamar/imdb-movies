import React from "react";
import { Circle, Root } from "./styles";

export interface ILoader {
  size?: number;
}

export const Loader = ({ size }: ILoader): React.ReactElement => (
  <Root>
    <Circle animationDelay={0} size={size} />
    <Circle animationDelay={0.2} size={size} />
    <Circle animationDelay={0.4} size={size} />
    <Circle animationDelay={0.6} size={size} />
  </Root>
)