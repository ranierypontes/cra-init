import styled from "styled-components";

import { breakpoints, sizes } from "../../styles/settings/breakpoints";

export const Section = styled.section`
  padding: 40px 0 80px;
  @media ${breakpoints.lessThan(sizes.desktop)} {
    padding-bottom: 120px;
  }
  @media ${breakpoints.lessThan(sizes.phone)} {
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .s-header {
    text-align: center;
  }

  .s-content {
    .box {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
      margin: 5px 0 5px 100px;

      &.-title {
        padding: 5px 10px;
        margin: 50px 0 0 100px;
      }
    }
  }
`;
