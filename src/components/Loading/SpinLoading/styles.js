import styled, { css } from "styled-components";
import { rgba } from "polished";
import { colors } from "../../../styles/settings/colors";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* fullscreen */
  ${(props) =>
    props.fullscreen &&
    css`
      z-index: 5000;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${rgba(colors.grayscale1, 0.2)};
    `}
`;

export const Svg = styled.svg`
  width: 60px;
  height: 60px;
  padding: 0;
  transform: rotate(90deg);
`;

export const Path = styled.path`
  fill: transparent;
  stroke: ${colors.c1};
  stroke-width: 5px;
  animation: 1s circle ease-in infinite;

  @keyframes circle {
    0% {
      stroke-dasharray: 0 400;
      stroke-dashoffset: 0;
    }
    25% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke: ${colors.c1};
    }
    90% {
      stroke: ${colors.c2};
    }
    100% {
      stroke-dasharray: 400 400;
      stroke-dashoffset: -400;
    }
  }
`;
