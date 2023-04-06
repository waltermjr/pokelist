import styled from "styled-components";
import { globalStyleGuide } from "../../../stylesheet";

export const Search = styled.input`
  border-radius: 10px;
  box-shadow: ${globalStyleGuide.shadow};
  border: 0;
  height: 30px;
  padding: 10px;
  flex-grow: 3;

  &:focus {
    outline: none;
  }
`

export const Select = styled.select`
  border-radius: 10px;
  box-shadow:  ${globalStyleGuide.shadow};
  border: 0;
  height: 50px;
  flex-grow: 1;
  margin: 0 0 0 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`