import styled, { css } from "styled-components";

import { sizes, breakpoints } from "./breakpoints";

const Container = styled.div`
  margin: 0 auto;
  /* padding: 0 120px; */
  width: 100%;
  max-width: ${sizes.large};

  @media ${breakpoints.lessThan(sizes.large)} {
    padding: 0 40px;
    max-width: ${sizes.widescreen};
  }
  @media ${breakpoints.lessThan(sizes.widescreen)} {
    padding: 0 30px;
    max-width: ${sizes.desktop};
  }
  @media ${breakpoints.lessThan(sizes.desktop)} {
    max-width: ${sizes.tablet};
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    max-width: ${sizes.phone};
  }
  @media ${breakpoints.lessThan(sizes.phone)} {
    padding: 0 25px;
  }
  @media ${breakpoints.lessThan(sizes.smaller)} {
    padding: 0 20px;
  }

  ${(props) =>
    props.dashboard &&
    css`
      max-width: ${sizes.widescreen};
      @media ${breakpoints.lessThan(sizes.large)} {
        padding: 0 40px;
        max-width: ${sizes.desktop};
      }
      @media ${breakpoints.lessThan(sizes.widescreen)} {
        padding: 0;
        max-width: ${sizes.tablet};
      }
      @media ${breakpoints.lessThan(sizes.desktop)} {
        padding: 0 30px;
        max-width: unset;
      }
      @media ${breakpoints.lessThan(sizes.tablet)} {
        max-width: unset;
      }
      @media ${breakpoints.lessThan(sizes.phone)} {
        padding: 0 20px;
      }
    `}
`;
export default Container;
