import styled from "styled-components";
import { globalStyleGuide } from "../../../stylesheet";

interface PropsImg {
  src: string
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`

export const Content = styled.div`
  max-width: 300px;
  width: 100%;
  height: 400px;
  background: white;
  padding: 25px 15px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    align-self: flex-end;
    max-width: 100%;
    height: 600px;
  }

  @media (max-width: 468px) {
    align-self: flex-end;
    max-width: 100%;
    height: 400px;
  }
`

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  font-family: "arial";
  cursor: pointer;
`

export const Image = styled.div<PropsImg>`
  width: 150px;
  height: 150px;
  background-image: url(${props => props.src});
  background-repeat: round;
`

export const Name = styled.div`
  color: ${globalStyleGuide.darkGray};
  font-weight: 800;
  font-size: 20px;
  margin: 5px 0;
`

export const Title = styled.div`
  color: ${globalStyleGuide.darkGray};
  font-weight: 800;
  font-size: 12px;
  margin: 10px 0;
`

export const Text = styled.p`
  color: ${globalStyleGuide.darkGray};
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
`

export const Number = styled.div`
  color: ${globalStyleGuide.mediumGray};
  font-weight: 900;
  margin: 0;
  font-size: 12px;
`