import { useState, forwardRef, useImperativeHandle, Ref, useEffect } from "react"
import { IPokemonDetails } from "../../context/PokemonListContext"
import Tag from "../tag"
import { Container, Content, Close, Image, Number, Name, Title, Text } from "./style"
import { api } from "../../services/api"

interface Props {
  pokemon: IPokemonDetails,
}

const Modal = ({ pokemon }: Props, ref: Ref<any>) => {
  const [showModal, setShowModal] = useState<boolean>()
  const [details, setDetails] = useState<string>("")
  const { sprites } = pokemon

  useImperativeHandle(ref, () => {
    return { 
      show: () => setShowModal(true)
    }
  })

  const getPokemonDetails = async() => {
    try{
      const result = await api.get(`pokemon-species/${pokemon.id}`)
      setDetails(result.data.flavor_text_entries[1].flavor_text)
    }catch(error) {
      setDetails("")
    }
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  return(
    showModal ? (
      <Container data-testid="container-modal" onClick={() => setShowModal(false)}>
        <Content data-testid="content-modal" onClick={(e) => e.stopPropagation()}>
          <Close onClick={() => setShowModal(false)}>X</Close>
          <Image src={sprites.other.dream_world.front_default} />
          <Number>#{pokemon.order}</Number>
          <Name>{pokemon.name}</Name>
          <Tag types={pokemon.types} />
          <Title>Pokedex Entry</Title>
          <Text data-testid="modal-details">{details}</Text>
        </Content>
      </Container>
      )
      :
      (<></>)
  )
}

export default forwardRef(Modal)