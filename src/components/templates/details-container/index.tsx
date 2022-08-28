import { PropsWithChildren } from "react"
import { Container } from "./styles"

export const DetailsContainer = ({children}: PropsWithChildren<{}>): React.ReactElement => {
  return (
    <Container>
      {children}
    </Container>
  )
}