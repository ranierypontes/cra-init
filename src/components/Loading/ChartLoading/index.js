import React from "react";
// import PropTypes from "prop-types";

import * as S from "./styles";

const ChartLoading = ({ fullscreen, ...props }) => (
  <S.Wrapper fullscreen={fullscreen}>
    <S.Loading {...props}>
      <S.Bar />
      <S.Bar />
      <S.Bar />
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Loading>
  </S.Wrapper>
);

// ChartLoading.propTypes = {
//   fullscreen: PropTypes.bool,
// };

// ChartLoading.defaultProps = {
//   fullscreen: false,
// };

export default ChartLoading;
