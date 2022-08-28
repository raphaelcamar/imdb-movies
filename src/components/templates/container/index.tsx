import { PropsWithChildren } from "react";
import { ContainerStyle } from "./styles";

export const Container = ({ children }: PropsWithChildren<any>): React.ReactElement => (
  <ContainerStyle>{children}</ContainerStyle>
)