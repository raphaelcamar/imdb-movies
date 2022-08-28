import { Score } from "./styles"

export interface IMetaScore {
  score: number
}

export const MetaScore = ({score}: IMetaScore): React.ReactElement => {
  return (
    <Score score={score}>{score}</Score>
  )
}