import { PropsWithChildren } from "react"
import { Space } from "./styles"

export interface ISpacing {
  horizontal?: number
  vertical?: number
}

export const Spacing = ({ children, horizontal, vertical }: PropsWithChildren<ISpacing>): React.ReactElement => (
  <Space horizontal={horizontal} vertical={vertical}>{children}</Space>
)