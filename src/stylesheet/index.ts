import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { pokemonTypesName } from "../context/PokemonListContext";
import { darken } from "polished"

interface IglobalStyleGuide {
  shadow: string,
  gray: string,
  mediumGray: string,
  darkGray: string,
  red: string,
  orange: string,
  green: string,
  blue: string,
  black: string,
}

interface PropTag {
  type: pokemonTypesName
}

export const pokemonsTypesColors = {
  normal: '#93B9E0',
  fighting: '#E3CFBE',
  flying: '#8ED7AB',
  poison: '#C3BAD6',
  ground:'#E3CFBE',
  rock: '#ccc',
  ghost: '#9e9e9e',
  steel: '#C3BAD6',
  fire: '#FF6961',
  water: '#93B9E0',
  glass: '#8ED7AB',
  electric:'#F9E7B3',
  psychic: '#93B9E0',
  ice: '#93B9E0',
  dragon: '#D7E1D0',
  dark: '#c0c0',
  fairy: '#C3BAD6',
  shadow: '#A9BFF1',
  grass: '#D7E1D0',
  bug: '#ccc',
}

export const globalStyleGuide: IglobalStyleGuide = {
  shadow: '0px 0px 14px 7px rgba(212,212,212,1)',
  gray: '#f3f3f3',
  mediumGray: '#a5a5a5',
  darkGray: '#3c3c3c',
  black: '#000',
  red: '#f44336',
  orange: '#ff5722',
  green: '#8bc34a',
  blue: '#2196f3',
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color:  ${globalStyleGuide.gray};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`