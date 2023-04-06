import { Content, Container } from "./style"
import { PokemonTypes } from "../../context/PokemonListContext"

interface Props {
  types: PokemonTypes[]
}

const Tag = ({ types } : Props) => {

  return(
    <Container>
      {types.map(((types: PokemonTypes, index: number) => {
        return <Content data-testid="TagElement" key={index} type={types.type.name}>{types.type.name}</Content>
      }))}
    </Container>
  )
}

export default Tag