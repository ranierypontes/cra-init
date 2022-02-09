import styled, { css } from "styled-components";
import { rgba } from "polished";
// import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
import { colors } from "../../../styles/settings/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Variants */
  ${(props) =>
    props.fullscreen &&
    css`
      z-index: 5000;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${rgba(colors.white, 0.2)};
    `}
`;

export const Loading = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Bar = styled.span`
  background-color: ${colors.secondary};
  width: 4px;
  height: 100%;

  &:first-child {
    animation: loadbars 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite 0s;
  }
  &:nth-child(3) {
    animation: loadbars 1.5s ease-in-out infinite -0.2s;
  }
  &:nth-child(2) {
    animation: loadbars 1.5s ease-in-out infinite -0.4s;
  }
  &:nth-child(5) {
    animation: loadbars 1.5s ease-in-out infinite -0.6s;
  }
  &:nth-child(4) {
    animation: loadbars 1.5s ease-in-out infinite -0.8s;
  }
  &:nth-child(6) {
    animation: loadbars 1.5s ease-in-out infinite -1s;
  }

  @keyframes loadbars {
    0% {
      transform: scaleY(0.5);
    }
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.5);
    }
  }
`;
