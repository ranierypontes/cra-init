import styled, { css } from "styled-components";
// import { rgba } from "polished";

import { colors } from "../../../styles/settings/colors";
// import { typography } from "../../../styles/settings/ttypography";
// import { breakpoints, sizes } from "../../../styles/settings/breakpoints";

const CardDefault = styled.div`
  border-radius: 4px;
  padding: 24px;
  background-color: ${colors.c6};

  .c-header {
    /* border: 2px solid blue; */

    &.-between {
      display: flex;
      justify-content: space-between;
    }
  }

  .c-content {
    /* margin-top: 8px; */
    /* border: 1px solid red; */
  }

  .c-title {
    text-transform: uppercase;
    color: ${colors.white};
    font-size: ${(props) => props.theme.fontSize.extraSmaller};
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  // Variants
  &.-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ${(props) =>
    props.inverse &&
    css`
      background-color: ${colors.grayscale1};
      .c-title {
        color: ${colors.c4};
      }
    `}
`;

export default CardDefault;
