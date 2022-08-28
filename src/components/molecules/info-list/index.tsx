import { InfoLine } from "../../atoms"
import { Wrapper } from "./styles"

interface IInfoList {
  title: string
  list: string[]
}

export const InfoList = ({list, title}: IInfoList): React.ReactElement => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {list?.map((item, index) => (
        <InfoLine key={item} isBlank={index % 2 !== 0}>{item}</InfoLine>
      ))}
    </Wrapper>
  )
}