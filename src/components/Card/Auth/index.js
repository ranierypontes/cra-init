import styled from "styled-components";

import { rgba } from "polished";
import { colors } from "../../../styles/settings/colors";
import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
import { typography } from "../../../styles/settings/typography";

const CardAuth = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 950px;
  height: 520px;
  background-color: ${colors.white};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 16px ${rgba(colors.black, 0.12)};
  @media ${breakpoints.lessThan(sizes.tablet)} {
    height: auto;
  }

  .c-header {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      width: 100%;
      padding: 60px 40px;
    }
    @media ${breakpoints.lessThan("420px")} {
      padding: 40px 20px;
    }

    .c-title {
      margin-bottom: 30px;
      @media ${breakpoints.lessThan(sizes.tablet)} {
        text-align: center;
      }
      @media ${breakpoints.lessThan("420px")} {
        margin-bottom: 20px;
        font-size: ${typography.medium};
      }
    }
  }

  .c-content {
    width: 50%;
    overflow: hidden;
    background-color: ${colors.c3};
    @media ${breakpoints.lessThan(sizes.tablet)} {
      display: none;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default CardAuth;
