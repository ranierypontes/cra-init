import styled from "styled-components";
import { lighten } from "polished";

import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
import { colors } from "../../../styles/settings/colors";
import { typography } from "../../../styles/settings/typography";

export const FormDefault = styled.form`
  .form-group {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    &:not(:last-of-type) {
      margin-bottom: 22px;
    }

    &.-right {
      align-items: flex-end;
      @media ${breakpoints.lessThan(sizes.tablet)} {
        align-items: center;
      }
    }

    .error-message {
      margin-top: 5px;
      /* margin-left: 10px; */
      font-weight: 300;
      display: block;
      font-size: ${typography.extraSmaller};
      color: ${colors.danger2};
    }
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;

    .label {
      margin: 4px 0 0 8px;
      padding: 0;
    }

    .link {
      color: ${colors.c1};
      font-weight: normal;
    }
  }

  .form-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 45px;

    &.-center {
      justify-content: center;
      text-align: center;
    }

    &.-right {
      justify-content: flex-end;
    }
  }

  .label {
    line-height: 1;
    margin-bottom: 8px;
    font-size: ${typography.smaller};
    font-weight: 300;

    &.-custom {
      color: ${colors.c6};
    }
  }

  .form-control {
    display: block;
    width: 100%;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    color: ${colors.black};
    background-color: ${colors.grayscale1};
    font-weight: 300;
    border: 1px solid ${colors.grayscale1};
    font-size: ${typography.default};
    border-radius: 4px;
    outline: none;
    transition: all ease 0.2s;

    /* &:not(:last-of-type) {
      margin-bottom: 15px;
    } */

    &::placeholder {
      color: ${lighten(0.25, colors.grayscale5)};
      font-weight: 300;
      font-size: ${typography.smaller};
    }

    &:focus {
      border-color: ${colors.c1};
    }

    &:disabled {
      opacity: 0.6;
    }

    &.-textarea {
      padding-top: 22px;
      padding-bottom: 22px;
      resize: none;
      height: auto;

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.c2};
        border-radius: 6px;
      }
    }

    /* &.-is-invalid {
      border-color: transparent;
    } */

    &.-custom {
      font-size: ${typography.smaller};
      font-weight: normal;
    }
  }
`;
