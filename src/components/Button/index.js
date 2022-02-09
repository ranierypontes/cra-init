import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../styles/settings/colors";
import { breakpoints, sizes } from "../../styles/settings/breakpoints";

import buttonSizes from "./sizes";
import buttonVariations from "./variations";

export const Button = styled.button.attrs((props) => ({
  type: props.type ? props.type : "button",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "500")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  transform-origin: center;
  transition: color ease-in-out 0.15s, border-color ease-in-out 0.15s,
    background-color ease-in-out 0.15s, opacity ease-in-out 0.15s,
    transform ease-in-out 0.15s;

  ${(props) => (props.size ? buttonSizes[props.size] : "")}
  ${(props) => (props.variation ? buttonVariations[props.variation] : null)}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

    ${(props) =>
    props.pressOnClick &&
    css`
      &:active {
        transform: scale(0.96);
      }
    `}

    ${(props) =>
    props.hasIconBefore &&
    css`
      .icon {
        margin-right: 10px;
        @media ${breakpoints.lessThan(sizes.phone)} {
          margin-right: 5px;
        }
      }
    `}

    ${(props) =>
    props.hasIconAfter &&
    css`
      .icon {
        margin-left: 10px;
        @media ${breakpoints.lessThan(sizes.phone)} {
          margin-left: 5px;
        }
    `}

    ${(props) =>
    props.isLoading &&
    css`
      &::after {
        content: "";
        z-index: 50;
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid ${colors.white};
        border-top-color: transparent;
        animation: ${rotateAnim} 0.6s linear infinite;
      }
    `}
`;

const rotateAnim = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

Button.defaultProps = {
  variation: "default",
  size: "default",
  $fontWeight: "500",
  full: false,
  pressOnClick: false,
  disabled: false,
  hasIconBefore: false,
  hasIconAfter: false,
  isLoading: false,
  outline: false,
  outlineFilledOnHover: false,
  transparent: false,
  noPadding: false,
};

Button.propTypes = {
  variation: PropTypes.oneOf(Object.keys(buttonVariations)).isRequired,
  size: PropTypes.oneOf(Object.keys(buttonSizes)).isRequired,
  $fontWeight: PropTypes.string.isRequired,
  $letterSpacing: PropTypes.string,
  full: PropTypes.bool,
  pressOnClick: PropTypes.bool,
  disabled: PropTypes.bool,
  hasIconBefore: PropTypes.bool,
  hasIconAfter: PropTypes.bool,
  isLoading: PropTypes.bool,
  outline: PropTypes.bool,
  outlineFilledOnHover: PropTypes.bool,
  transparent: PropTypes.bool,
  noPadding: PropTypes.bool,
};
