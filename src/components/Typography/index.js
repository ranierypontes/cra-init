import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../styles/settings/colors";
import { typography } from "../../styles/settings/typography";

const fontColors = {
  default: css`
    color: ${colors.c4};
  `,
  white: css`
    color: ${colors.white};
  `,
  black: css`
    color: ${colors.black};
  `,
  gray1: css`
    color: ${colors.grayscale1};
  `,
  gray2: css`
    color: ${colors.grayscale2};
  `,
  gray3: css`
    color: ${colors.grayscale3};
  `,
  gray4: css`
    color: ${colors.grayscale4};
  `,
  gray5: css`
    color: ${colors.grayscale5};
  `,
  gray6: css`
    color: ${colors.grayscale6};
  `,
  gray7: css`
    color: ${colors.grayscale7};
  `,
  1: css`
    color: ${(props) => props.theme.colors.primary}; ;
  `,
  2: css`
    color: ${colors.c2};
  `,
  3: css`
    color: ${colors.c3};
  `,
  4: css`
    color: ${colors.c4};
  `,
  5: css`
    color: ${colors.c5};
  `,
  6: css`
    color: ${colors.c6};
  `,
  7: css`
    color: ${colors.c7};
  `,
  8: css`
    color: ${colors.c8};
  `,
  9: css`
    color: ${colors.c9};
  `,
  success: css`
    color: ${colors.success};
  `,
  success2: css`
    color: ${colors.success2};
  `,
  danger: css`
    color: ${colors.danger};
  `,
  danger2: css`
    color: ${colors.danger2};
  `,
  info: css`
    color: ${colors.info};
  `,
  warning: css`
    color: ${colors.warning};
  `,
  warning2: css`
    color: ${colors.warning2};
  `,
};

const fontSizes = {
  default: css`
    font-size: ${typography.default};

    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  1: css`
    font-size: ${typography.superSmaller};
    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  2: css`
    font-size: ${typography.extraSmaller};
    .icon {
      width: 14px;
      height: 14px;
    }
  `,
  3: css`
    font-size: ${typography.smaller};
    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  4: css`
    font-size: ${typography.default};
    .icon {
      width: 16px;
      height: 16px;
    }
  `,
  5: css`
    font-size: ${typography.medium};
    .icon {
      width: 18px;
      height: 18px;
    }
  `,
  6: css`
    font-size: ${typography.large};
    .icon {
      width: 19px;
      height: 19px;
    }
  `,
  7: css`
    font-size: ${typography.extraLarge};
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  8: css`
    font-size: ${typography.superLarge};
    .icon {
      width: 21px;
      height: 1px;
    }
  `,
};

export const Typography = styled.p`
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : "1.1")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "600")};
  text-transform: ${(props) => (props.$uppercase ? "uppercase" : "none")};
  letter-spacing: ${(props) =>
    props.$letterSpacing ? props.$letterSpacing : "normal"};
  ${(props) => (props.$size ? fontSizes[props.$size] : fontSizes["default"])}
  ${(props) =>
    props.$color ? fontColors[props.$color] : fontColors["default"]}

    .icon {
    &.-danger {
      color: ${colors.danger2};
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
