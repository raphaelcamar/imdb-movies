import { PropsWithChildren } from "react"
import { Button, TextEllipsis } from "../../atoms"
import { Card } from "../../atoms/card"
import { Img, Container, SpaceAttributes } from "./styles"

interface IMovieCard {
  image: string
  title: string
  handleClickMovie: () => void
}

export const MovieCard = ({ image, title, handleClickMovie }: PropsWithChildren<IMovieCard>): React.ReactElement => (
  <Card>
    <Container>
      <Img src={image} alt="Movie" />
      <SpaceAttributes>
        <TextEllipsis rows={1}>{title}</TextEllipsis>
        <Button onClick={() => handleClickMovie()}>Abrir</Button>
      </SpaceAttributes>
    </Container>
  </Card>
)