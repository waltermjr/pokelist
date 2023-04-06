import styled from "styled-components";
import { pokemonTypesName } from "../../../context/PokemonListContext";
import { pokemonsTypesColors } from "../../../stylesheet";

import { darken } from "polished"

interface PropTag {
  type: pokemonTypesName
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`

export const Content = styled.div<PropTag>`
  border-radius: 3px;
  padding: 3px 5px;
  font-size: 12px;
  margin: 0 5px 0 0;
  color: ${(prop: PropTag) => darken(0.5, pokemonsTypesColors[prop.type])};
  background-color: ${(prop: PropTag) => pokemonsTypesColors[prop.type]};
  font-weight: bold;
`