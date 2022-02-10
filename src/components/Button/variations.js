import { css } from "styled-components";
import { colors } from "../../styles/settings/colors";
import { lighten, darken } from "polished";

const buttonVariations = {
  default: css`
    color: ${colors.white};
    background-color: ${colors.grayscale5};
    border: 1px solid ${colors.grayscale5};
    &:hover,
    &:focus {
      background-color: ${darken(0.09, colors.grayscale5)};
      border-color: ${darken(0.09, colors.grayscale5)};
    }
    &:active {
      background-color: ${darken(0.15, colors.grayscale5)};
      border-color: ${darken(0.15, colors.grayscale5)};
    }

    /* Default Outline */
    /* ${(props) =>
      props.outline &&
      css`
        color: ${colors.grayscale5};
        background-color: transparent;
        border: 2px solid ${lighten(0.2, colors.grayscale4)};
        &:hover,
        &:focus {
          color: ${lighten(0.09, colors.grayscale5)};
          background-color: transparent;
          border-color: ${lighten(0.22, colors.grayscale4)};
        }
        &:active {
          color: ${lighten(0.15, colors.grayscale5)};
          background-color: transparent;
          border-color: ${lighten(0.25, colors.grayscale4)};
        }
      `} */

    /* Default Transparent */
    /* ${(props) =>
      props.transparent &&
      css`
        color: ${colors.grayscale5};
        background-color: transparent;
        border-color: transparent;

        &:hover,
        &:focus,
        &:active {
          color: ${colors.grayscale5};
          background-color: transparent;
          border-color: transparent;
        }
      `} */
  `,
  primary: css`
    color: ${colors.white};
    background-color: ${colors.c1};
    border: 1px solid ${colors.c1};
    &:hover,
    &:focus {
      background-color: ${darken(0.09, colors.c1)};
      border-color: ${darken(0.09, colors.c1)};
    }
    &:active {
      background-color: ${darken(0.15, colors.c1)};
      border-color: ${darken(0.15, colors.c1)};
    }

    /* Primary Outline */
    /* ${(props) =>
      props.outline &&
      css`
        color: ${colors.c1};
        background-color: transparent;
        border: 2px solid ${colors.c1};
        &:hover,
        &:focus {
          color: ${lighten(0.09, colors.c1)};
          background-color: transparent;
          border-color: ${lighten(0.09, colors.c1)};
        }
        &:active {
          color: ${lighten(0.15, colors.c1)};
          background-color: transparent;
          border-color: ${lighten(0.15, colors.c1)};
        }
      `} */

    /* Primary Outline Filled On Hover */
    /* ${(props) =>
      props.outlineFilledOnHover &&
      css`
        color: ${colors.c1};
        background-color: transparent;
        border: 2px solid ${colors.c1};
        &:hover,
        &:focus {
          color: ${colors.white};
          background-color: ${colors.c1};
          border-color: ${colors.c1};
        }
        &:active {
          color: ${colors.white};
          background-color: ${lighten(0.09, colors.c1)};
          border-color: ${lighten(0.09, colors.c1)};
        }
      `} */

    /* Primary Transparent */
    /* ${(props) =>
      props.transparent &&
      css`
        color: ${colors.c1};
        background-color: transparent;
        border-color: transparent;

        &:hover,
        &:focus {
          color: ${lighten(0.09, colors.c1)};
          background-color: transparent;
          border-color: transparent;
        }

        &:active {
          color: ${lighten(0.15, colors.c1)};
          background-color: transparent;
          border-color: transparent;
        }
      `} */
  `,
  success: css`
    color: ${colors.white};
    background-color: ${colors.success2};
    border: 1px solid ${colors.success2};
    &:hover,
    &:focus {
      background-color: ${darken(0.09, colors.success2)};
      border-color: ${darken(0.09, colors.success2)};
    }
    &:active {
      background-color: ${darken(0.15, colors.success2)};
      border-color: ${darken(0.15, colors.success2)};
    }
  `,
  warning: css`
    color: ${colors.white};
    background-color: ${colors.warning};
    border: 1px solid ${colors.warning};
    &:hover,
    &:focus {
      background-color: ${darken(0.09, colors.warning)};
      border-color: ${darken(0.09, colors.warning)};
    }
    &:active {
      background-color: ${darken(0.15, colors.warning)};
      border-color: ${darken(0.15, colors.warning)};
    }
  `,
  danger: css`
    color: ${colors.white};
    background-color: ${colors.danger};
    border: 1px solid ${colors.danger};
    &:hover,
    &:focus {
      background-color: ${darken(0.09, colors.danger)};
      border-color: ${darken(0.09, colors.danger)};
    }
    &:active {
      background-color: ${darken(0.15, colors.danger)};
      border-color: ${darken(0.15, colors.danger)};
    }
  `,
};

export default buttonVariations;
