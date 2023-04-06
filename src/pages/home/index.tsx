import SearchComp from "../../components/search"
import { Container } from "../../stylesheet"
import { Image, Content } from "./style"
import { useContext, useEffect } from "react"
import { PokemonContext } from "../../context/PokemonListContext"
import Card from "../../components/card"
import Load from "../../components/loading"
import Pagination from "../../components/pagination"

const Home = (): JSX.Element => {
  const { pokemonList, getList, loading } = useContext(PokemonContext)

  useEffect(() => {
    getList()
  }, [])

  return(
    <Container>
      {loading && <Load />}
      <Image />
      <SearchComp />
      <Content>
        {pokemonList.map((pokemon,key) => <Card key={key} pokemon={pokemon}/>)}
      </Content>
      <Pagination />
    </Container>
  )
}

export default Home