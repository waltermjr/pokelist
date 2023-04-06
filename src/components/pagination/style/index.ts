import styled from "styled-components"
import { globalStyleGuide } from "../../../stylesheet"

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export const Button = styled.button`
  border-radius: 3px;
  border: 0;
  padding: 5px 15px;
  margin: 10px;
  cursor: pointer;
  background-color: ${globalStyleGuide.green};

  &:disabled {
    cursor: no-drop;
    opacity: 0.6;
  }
`