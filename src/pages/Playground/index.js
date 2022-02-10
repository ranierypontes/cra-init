import React from "react";

import { Typography } from "../../components/All";
// import { IconChat } from "../../components/Icons";

import * as S from "./styles";

const PagePlayground = () => (
  <S.Section>
    <header className="s-header">
      <Typography
        className="s-title"
        as="h1"
        $color="8"
        $size="6"
        $uppercase
        $fontWeight="normal"
      >
        Playground
      </Typography>
    </header>
    <div className="s-content">
      <div className="box -title">
        <Typography as="h2" $size="5" $color="8">
          Button
        </Typography>
      </div>

      <div className="box">components here</div>
    </div>
  </S.Section>
);

export default PagePlayground;
