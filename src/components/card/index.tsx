import { Content, Picture, Number, Name } from "./style"
import Tag from "../tag"
import { IPokemonDetails } from "../../context/PokemonListContext"
import Modal from "../modal"
import { useRef } from "react"

interface Props {
  pokemon: IPokemonDetails
}

interface IRef {
  show: () => any
}

const Card = ({ pokemon } :Props) => {
  const modalRef = useRef<IRef>();

  return(
    <>
      <Modal ref={modalRef} pokemon={pokemon}/>
      <Content onClick={() => modalRef.current?.show()}>
        <Picture>
          <img src={pokemon.sprites.front_default} />
        </Picture>
        <Number>N° {pokemon.order}</Number>
        <Name>{pokemon.name}</Name>
        <Tag types={pokemon.types} />
      </Content>
    </>
  )
}

export default Card