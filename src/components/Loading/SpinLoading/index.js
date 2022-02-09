import React from "react";
// import PropTypes from "prop-types";

import * as S from "./styles";

const SpinLoading = ({ fullscreen, ...props }) => (
  <S.Wrapper fullscreen={fullscreen}>
    <S.Svg
      version="1.1"
      x="0"
      y="0"
      viewBox="-10 -10 120 120"
      enableBackground="new 0 0 200 200"
      xmlSpace="preserve"
    >
      <S.Path d="M0,50 A50,50,0 1 1 100,50 A50,50,0 1 1 0,50" {...props} />
    </S.Svg>
  </S.Wrapper>
);

// SpinLoading.propTypes = {
//   fullscreen: PropTypes.bool,
// };

// SpinLoading.defaultProps = {
//   fullscreen: false,
// };

export default SpinLoading;
