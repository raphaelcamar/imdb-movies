import { PropsWithChildren } from "react"
import { Container } from "./styles"

export const ErrorMessage = ({children}: PropsWithChildren<{}> ): React.ReactElement => {

  return (
    <Container>
      {children}
    </Container>
  )
}