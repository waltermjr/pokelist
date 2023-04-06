import { useContext } from "react"
import { Button, Footer } from "./style"
import { PokemonContext } from "../../context/PokemonListContext"

const Pagination = () => {
  const { pagination, pokemonsByPage, setPagination, setPokemonList } = useContext(PokemonContext)

  const next = () => {
    if(pagination <= pokemonsByPage.length -1){
      setPagination(pagination + 1)
      setPokemonList(pokemonsByPage[pagination + 1])
    }
  }

  const prev = () => {
    if(pagination > 0){
      setPagination(pagination - 1)
      setPokemonList(pokemonsByPage[pagination - 1])
    }
  }

  return(
    <Footer>
      <Button disabled={pagination === 0} onClick={() => prev()}>Anterior</Button>
      <Button disabled={pagination  === pokemonsByPage.length - 1} onClick={() => next()}>Próximo</Button>
    </Footer>
  )
}

export default Pagination