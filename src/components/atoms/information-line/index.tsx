import { PropsWithChildren } from "react"
import { Line } from "./styles"

export interface IInfoLine {
  isBlank?: boolean
}

export const InfoLine = ({ isBlank, children }: PropsWithChildren<IInfoLine>): React.ReactElement => {
  return (
    <Line isBlank={isBlank}>{children}</Line>
  )
}