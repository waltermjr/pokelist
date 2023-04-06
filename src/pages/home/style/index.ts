import styled from "styled-components";
import pokedex from "../../../assets/images/pokedex.png"
import { globalStyleGuide } from "../../../stylesheet";

export const Image = styled.div`
  max-width: 400px;
  height: 72px;
  margin: 30px auto;
  background: url(${pokedex});
  background-size: 100%;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 60px 0 0 0;
  grid-gap: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`