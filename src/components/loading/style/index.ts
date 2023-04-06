import styled from "styled-components";
import { globalStyleGuide } from "../../../stylesheet";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  @keyframes lds {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }

  div{
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${globalStyleGuide.darkGray};
    animation: lds 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    &:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }

    &:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }

    &:nth-child(3) {
      left: 56px;
      animation-delay: 0;
    }
  }
`
