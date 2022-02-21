import styled from "styled-components";

import { rgba } from "polished";
import { colors } from "../../../styles/settings/colors";
import { breakpoints, sizes } from "../../../styles/settings/breakpoints";
// import { typography } from "../../../styles/settings/ttypography";

const CardAuth = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
  background-color: ${colors.white};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 16px ${rgba(colors.black, 0.12)};
  @media ${breakpoints.lessThan(sizes.tablet)} {
    height: auto;
  }

  .c-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 45px 40px;
    @media ${breakpoints.lessThan(sizes.tablet)} {
      padding: 40px 35px;
    }
    @media ${breakpoints.lessThan("420px")} {
      padding: 30px 20px;
    }

    .c-title {
      margin-bottom: 25px;
      @media ${breakpoints.lessThan(sizes.tablet)} {
        text-align: center;
      }
      @media ${breakpoints.lessThan("420px")} {
        margin-bottom: 20px;
        font-size: ${(props) => props.theme.fontSize.medium};
      }
    }
  }
`;

export default CardAuth;
