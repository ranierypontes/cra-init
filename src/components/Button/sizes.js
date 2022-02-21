import { css } from "styled-components";
// import { colors } from "../../styles/settings/colors";
// import { lighten, darken } from "polished";

const buttonSizes = {
  default: css`
    padding: ${(props) => (props.noPadding ? "2px" : "0 30px")};
    height: ${(props) => (props.noPadding ? "auto" : "40px")};
    letter-spacing: ${(props) =>
      props.$letterSpacing ? props.$letterSpacing : "0.5px"};
    font-size: ${(props) =>
      props.uppercase
        ? props.theme.fontSize.smaller
        : props.theme.fontSize.default};

    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  xs: css`
    padding: ${(props) => (props.noPadding ? "2px" : "0 15px")};
    height: ${(props) => (props.noPadding ? "auto" : "35px")};
    letter-spacing: ${(props) =>
      props.$letterSpacing ? props.$letterSpacing : "0.2px"};
    font-size: ${(props) =>
      props.uppercase
        ? props.theme.fontSize.superSmaller
        : props.theme.fontSize.extraSmaller};

    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  sm: css`
    padding: ${(props) => (props.noPadding ? "2px" : "0 20px")};
    height: ${(props) => (props.noPadding ? "auto" : "40px")};
    letter-spacing: ${(props) =>
      props.$letterSpacing ? props.$letterSpacing : "0.3px"};
    font-size: ${(props) =>
      props.uppercase
        ? props.theme.fontSize.extraSmaller
        : props.theme.fontSize.smaller};

    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  lg: css`
    padding: ${(props) => (props.noPadding ? "2px" : "0 40px")};
    height: ${(props) => (props.noPadding ? "auto" : "50px")};
    letter-spacing: ${(props) =>
      props.$letterSpacing ? props.$letterSpacing : "0.5px"};
    font-size: ${(props) =>
      props.uppercase
        ? props.theme.fontSize.default
        : props.theme.fontSize.medium};

    .icon {
      width: 19px;
      height: 19px;
    }
  `,
  xl: css`
    padding: ${(props) => (props.noPadding ? "2px" : "0 45px")};
    height: ${(props) => (props.noPadding ? "auto" : "55px")};
    letter-spacing: ${(props) =>
      props.$letterSpacing ? props.$letterSpacing : "0.5px"};
    font-size: ${(props) =>
      props.uppercase
        ? props.theme.fontSize.medium
        : props.theme.fontSize.large};

    .icon {
      width: 22px;
      height: 22px;
    }
  `,
};

export default buttonSizes;
