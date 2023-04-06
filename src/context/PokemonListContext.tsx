import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { api } from '../services/api';

interface IPokemonElement {
  count: number,
  next: string | null,
  previous: string | null,
  results: IPokemonData[]
}

interface IPokemonData {
  name: string,
  url: string,
}

export type pokemonTypesName = "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "ghost" | "steel" | "fire" | "water" | "glass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "shadow"

export interface PokemonTypes {
  slot: number,
  type: {
    name: pokemonTypesName
  }
}

export interface IPokemonDetails {
  name: string,
  types: PokemonTypes[],
  order: number,
  id: number,
  sprites: {
    front_default: string
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

interface IPokemon {
  pokemonList: IPokemonDetails[]
  setPokemonList: Dispatch<SetStateAction<IPokemonDetails[]>>
  getList: () => Promise<void>
  next: string | null
  setNext: Dispatch<SetStateAction<string | null>>
  prev: string | null
  setPrev: Dispatch<SetStateAction<string | null>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  pagination: number
  setPagination: Dispatch<SetStateAction<number>>
  pokemonsByPage: IPokemonDetails[][]
  setPokemonByPage: Dispatch<SetStateAction<IPokemonDetails[][]>>
  makePagination: (requestDetailed: IPokemonDetails[]) => void
}

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export const PokemonContext = createContext({} as IPokemon);

export const PokemonProvider = ({ children }: Props): JSX.Element => {

  const [pokemonsByPage, setPokemonByPage] = useState<IPokemonDetails[][]>([])
  const [pagination, setPagination] = useState<number>(0)
  const [pokemonList, setPokemonList] = useState<IPokemonDetails[]>([])
  const [next, setNext] = useState<string | null>(null)
  const [prev, setPrev] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  
  const getList = async() => {
    try{
      setLoading(true)
      const { data } = await api.get("pokemon?offset=0&limit=151")
      const requestDetailed: IPokemonDetails[] = await getListDetailed(data);
      makePagination(requestDetailed)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const makePagination = (requestDetailed: IPokemonDetails[]) => {
    const pokemonPaged = []
    for(let i = 0; i < requestDetailed.length; i = i + 20){
      pokemonPaged.push(requestDetailed.slice(i, i + 20))
    }
    setPagination(0)
    setPokemonByPage(pokemonPaged)
    setPokemonList(pokemonPaged.length > 0 ? pokemonPaged[0] : [])
  }
  
  const getListDetailed = async(data: IPokemonElement) => {
    const newData = data.results.map(async (element) => {
      const removeBaseUrl = element.url.replace("https://pokeapi.co/api/v2/", "")
      const { data } = await api.get(removeBaseUrl)
      return data
    })
    return Promise.all(newData)
  }

  return (
    <PokemonContext.Provider value={{
      pokemonList,
      setPokemonList,
      getList,
      next,
      setNext,
      prev,
      setPrev,
      loading,
      setLoading,
      pagination,
      setPagination,
      pokemonsByPage,
      setPokemonByPage,
      makePagination
    }}>{children}</PokemonContext.Provider>
  )
}
