import { PropsWithChildren } from "react";
import { ContainerCard } from "./styles";


export const Card = ({ children }: PropsWithChildren<any>): React.ReactElement => (
  <ContainerCard>{children}</ContainerCard>
)