import { SyntheticEvent, useState } from "react"
import { Button, Input } from "../../atoms"
import { Form } from "./styles"

interface IFormSearch {
  handleSearch: (e: SyntheticEvent, value: string) => Promise<void>
}

export const FormSearch = ({handleSearch}: IFormSearch): React.ReactElement => {

  const [search, setSearch] = useState<string>('')

  return (
    <Form onSubmit={(event) => handleSearch(event, search)}>
      <Input label='Pesquise pelo filme' value={search} onChange={(event) => setSearch(event.target.value)} />
      <Button type='submit'>Pesquisar</Button>
  </Form>
  )
}