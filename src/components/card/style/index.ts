import styled from "styled-components";
import { globalStyleGuide } from "../../../stylesheet";

export const Content = styled.div`
  border-radius: 20px;
  box-shadow: ${globalStyleGuide.shadow};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-family: "arial";
`

export const Picture = styled.picture`
  margin: -50px 0 0 0;
`

export const Number = styled.div`
  color: ${globalStyleGuide.mediumGray};
  font-weight: 900;
  margin: 0;
  font-size: 12px;
`

export const Name = styled.div`
  color: ${globalStyleGuide.darkGray};
  font-weight: 800;
  font-size: 16px;
  margin: 5px 0;
`