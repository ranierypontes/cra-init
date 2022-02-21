import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const fontColors = {
  default: css`
    color: ${(props) => props.theme.colors.textDefault};
  `,
  white: css`
    color: ${(props) => props.theme.colors.white};
  `,
  black: css`
    color: ${(props) => props.theme.colors.black};
  `,
  gray1: css`
    color: ${(props) => props.theme.colors.gray1};
  `,
  gray2: css`
    color: ${(props) => props.theme.colors.gray2};
  `,
  gray3: css`
    color: ${(props) => props.theme.colors.gray3};
  `,
  gray4: css`
    color: ${(props) => props.theme.colors.gray4};
  `,
  gray5: css`
    color: ${(props) => props.theme.colors.gray5};
  `,
  gray6: css`
    color: ${(props) => props.theme.colors.gray6};
  `,
  gray7: css`
    color: ${(props) => props.theme.colors.gray7};
  `,
  1: css`
    color: ${(props) => props.theme.colors.c1};
  `,
  2: css`
    color: ${(props) => props.theme.colors.c2};
  `,
  3: css`
    color: ${(props) => props.theme.colors.c3};
  `,
  4: css`
    color: ${(props) => props.theme.colors.c4};
  `,
  5: css`
    color: ${(props) => props.theme.colors.c5};
  `,
  6: css`
    color: ${(props) => props.theme.colors.c6};
  `,
  7: css`
    color: ${(props) => props.theme.colors.c7};
  `,
  8: css`
    color: ${(props) => props.theme.colors.c8};
  `,
  9: css`
    color: ${(props) => props.theme.colors.c9};
  `,
  success: css`
    color: ${(props) => props.theme.colors.success};
  `,
  success2: css`
    color: ${(props) => props.theme.colors.success2};
  `,
  danger: css`
    color: ${(props) => props.theme.colors.danger};
  `,
  danger2: css`
    color: ${(props) => props.theme.colors.danger2};
  `,
  info: css`
    color: ${(props) => props.theme.colors.info};
  `,
  warning: css`
    color: ${(props) => props.theme.colors.warning};
  `,
  warning2: css`
    color: ${(props) => props.theme.colors.warning2};
  `,
};

const fontSizes = {
  default: css`
    font-size: ${(props) => props.theme.fontSize.default};

    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  1: css`
    font-size: ${(props) => props.theme.fontSize.superSmaller};
    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  2: css`
    font-size: ${(props) => props.theme.fontSize.extraSmaller};
    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  3: css`
    font-size: ${(props) => props.theme.fontSize.smaller};
    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  4: css`
    font-size: ${(props) => props.theme.fontSize.default};
    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  5: css`
    font-size: ${(props) => props.theme.fontSize.medium};
    .icon {
      width: 18px;
      height: 18px;
    }
  `,
  6: css`
    font-size: ${(props) => props.theme.fontSize.large};
    .icon {
      width: 19px;
      height: 19px;
    }
  `,
  7: css`
    font-size: ${(props) => props.theme.fontSize.extraLarge};
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  8: css`
    font-size: ${(props) => props.theme.fontSize.superLarge};
    .icon {
      width: 21px;
      height: 21px;
    }
  `,
  9: css`
    font-size: ${(props) => props.theme.fontSize.ultraLarge};
    .icon {
      width: 22px;
      height: 22px;
    }
  `,
};

export const Typography = styled.p`
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : "1.1")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "normal")};
  text-transform: ${(props) => (props.$uppercase ? "uppercase" : "none")};
  letter-spacing: ${(props) =>
    props.$letterSpacing ? props.$letterSpacing : "normal"};
  ${(props) => (props.$size ? fontSizes[props.$size] : fontSizes["default"])}
  ${(props) =>
    props.$color ? fontColors[props.$color] : fontColors["default"]}

    .icon {
    &.-danger {
      color: ${(props) => props.theme.colors.danger2};
    }
  }

  ${(props) =>
    props.$hasIconBefore &&
    css`
      display: inline-flex;
      align-items: center;
      .icon {
        margin-right: 8px;
        margin-bottom: 2px;
      }
    `}

  ${(props) =>
    props.$hasIconAfter &&
    css`
      display: inline-flex;
      align-items: center;
      .icon {
        margin-left: 8px;
        margin-bottom: 2px;
      }
    `}
`;

Typography.defaultProps = {
  $size: "default",
  $color: "default",
  hasIconBefore: false,
  hasIconAfter: false,
};

Typography.propTypes = {
  $size: PropTypes.oneOf(Object.keys(fontSizes)),
  $color: PropTypes.oneOf(Object.keys(fontColors)),
  $fontWeight: PropTypes.string,
  $uppercase: PropTypes.bool,
  $letterSpacing: PropTypes.string,
  $hasIconBefore: PropTypes.bool,
  $hasIconAfter: PropTypes.bool,
  $lineHeight: PropTypes.string,
};
