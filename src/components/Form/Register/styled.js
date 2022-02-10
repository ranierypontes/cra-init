import styled from "styled-components";

import { colors } from "../../../styles/settings/colors";
import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
import { typography } from "../../../styles/settings/typography";

import { FormDefault } from "../Default";

export const Form = styled(FormDefault)`
  .form-footer {
    .paragraph {
      line-height: 1.3;
      font-weight: 300;
      font-size: ${typography.smaller};
      .link {
        color: ${colors.c1};
        font-weight: normal;
        @media ${breakpoints.lessThan(sizes.phone)} {
          display: block;
        }
      }
    }

    &.-center {
      text-align: center;
    }
  }
`;
