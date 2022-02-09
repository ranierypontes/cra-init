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
      margin-bottom: 25px;
    }

    &.-right {
      align-items: flex-end;
      @media ${breakpoints.lessThan(sizes.tablet)} {
        align-items: center;
      }
    }

    .error-message {
      margin-top: 8px;
      margin-left: 5px;
      font-weight: 300;
      display: block;
      font-size: ${typography.extraSmaller};
      color: ${colors.danger2};
    }

    /* &.-checkbox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    } */
  }

  .form-check {
    margin-bottom: 15px;

    .text {
      font-weight: normal;
      color: ${colors.grayscale6};
      margin-left: 5px;
    }

    .error-message {
      margin-top: 8px;
      margin-left: 5px;
      font-weight: 300;
      display: block;
      font-size: ${typography.extraSmaller};
      color: ${colors.danger2};
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

    &.-custom {
      color: ${colors.c6};
      font-size: ${typography.smaller};
    }
  }

  .form-control {
    /* font-family: "Gilroy"; */
    display: block;
    width: 100%;
    height: 46px;
    padding-left: 15px;
    padding-right: 15px;
    color: ${colors.grayscale6};
    background-color: ${colors.grayscale1};
    font-weight: normal;
    border: 2px solid ${colors.grayscale1};
    font-size: ${typography.default};
    border-radius: 4px;
    outline: none;
    transition: all ease 0.2s;

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }

    &::placeholder {
      color: ${lighten(0.25, colors.grayscale5)};
      font-weight: normal;
    }

    &:focus {
      border-color: ${colors.c1};
      color: ${colors.c1};
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
