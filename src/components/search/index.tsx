import { useEffect, useState, useRef, useContext } from "react"
import { Container, Search, Select } from "./style"
import { api } from "../../services/api"
import { IPokemonDetails, PokemonContext } from "../../context/PokemonListContext"

interface ITypes {
  name: string,
  url: string
}

const SearchComp = (): JSX.Element => {
  const [types, setTypes] = useState<ITypes[]>([])
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const InputRef = useRef<HTMLInputElement | null>(null);
  const { makePagination, pokemonsByPage } = useContext(PokemonContext);
  const refPokemon = useRef<IPokemonDetails[][] | null>(null)

  useEffect(() => {    
    getTypes()
  }, [])

  useEffect(() => {
    if(refPokemon.current === null && pokemonsByPage.length > 0){
      refPokemon.current = [...pokemonsByPage]
    }
  }, [pokemonsByPage])

  const getTypes = async() => {
    const result = await api.get("type")
    setTypes(result.data.results)
  }
  
  const makeSearch = () => {
    let listSearch: IPokemonDetails[] = []
    refPokemon?.current?.map((listPokemon) => listSearch = [...listSearch, ...listPokemon.filter((pokemon) => {
      const hasType = pokemon.types.filter((typeArr) => typeArr.type.name == selectRef?.current?.value)
      const includeName = pokemon.name.includes(InputRef?.current!.value)
      
      return  includeName && (hasType.length > 0 || selectRef?.current?.value === "default") ? pokemon : null
    })])

    makePagination(listSearch)
  }

  return(
    <Container>
      <Search placeholder="Search your Pokemon" ref={InputRef} onKeyUp={makeSearch} />
      <Select placeholder="Type" ref={selectRef} onChange={makeSearch}>
        <option value="default" key="default">Default</option>
        {types.map((tp, index) => <option value={tp.name} key={index}>{tp.name}</option>)}
      </Select>
    </Container>
  )
}

export default SearchComp