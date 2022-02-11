import styled from "styled-components";

import { colors } from "../../../styles/settings/colors";
import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
import { typography } from "../../../styles/settings/typography";

import { FormDefault } from "../Default";

export const Form = styled(FormDefault)`
  .form-group {
    .link {
      color: ${colors.c1};
      font-size: ${typography.smaller};
      font-weight: normal;

      &:hover {
        opacity: 0.8;
      }
    }

    &.-forgot {
      margin-top: -8px;
      margin-bottom: 15px;

      .link {
        margin-left: auto;
        margin-right: 0;
        @media ${breakpoints.lessThan(sizes.phone)} {
          margin-right: auto;
        }
      }
    }

    &.-footer {
      .paragraph {
        line-height: 1.3;
        text-align: center;
        font-weight: 300;
        font-size: ${typography.smaller};
        margin-left: auto;
        margin-right: auto;
        @media ${breakpoints.lessThan(sizes.phone)} {
          .link {
            display: block;
          }
        }
      }

      &.-center {
        text-align: center;
      }
    }
  }
`;
