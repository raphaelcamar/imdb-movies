import { PropsWithChildren } from "react";
import { Ellipsis } from "./styles";

export interface ITextEllipsis {
  rows?: number;
}

export const TextEllipsis =  ({ rows, children }: PropsWithChildren<ITextEllipsis>): React.ReactElement => (
  <Ellipsis rows={rows}>{children}</Ellipsis>
)