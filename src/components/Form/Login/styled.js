import styled from "styled-components";

import { colors } from "../../../styles/settings/colors";
import { breakpoints, sizes } from "../../../styles/settings/breakpoints";

import { FormDefault } from "../Default";

export const Form = styled(FormDefault)`
  .form-footer {
    .paragraph {
      line-height: 1.3;
      font-weight: 300;
      .link {
        color: ${colors.c1};
        font-weight: 500;
        @media ${breakpoints.lessThan(sizes.phone)} {
          display: block;
        }
      }
    }

    &.-center {
      text-align: center;
    }
  }

  .btn-temp {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
