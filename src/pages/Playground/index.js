import React from "react";

import { Typography, Button } from "../../components/All";
import { useTheme } from "styled-components";
// import { IconChat } from "../../components/Icons";

import * as S from "./styles";

const PagePlayground = () => {
  const theme = useTheme();

  console.log("Current theme: ", theme);

  return (
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
        <div className="box">
          <Button variation="success">ToggleTheme</Button>
        </div>

        <div className="box -title">
          <Typography as="h2" $size="5" $color="8">
            Button
          </Typography>
        </div>

        <div className="box">
          <Button>Button</Button>
          <Button variation="primary">Button</Button>
        </div>
        <div className="box">
          <Typography
            className="s-title"
            as="p"
            $color="1"
            $size="6"
            $fontWeight="normal"
          >
            Typography
          </Typography>
        </div>
      </div>
    </S.Section>
  );
};

export default PagePlayground;
