import React from "react";

import { useCustomTheme } from "../../contexts/all";
import { Typography, Button } from "../../components/All";
import * as S from "./styles";

const PagePlayground = () => {
  const { toggleDarkTheme } = useCustomTheme();

  const handleToggleTheme = () => {
    toggleDarkTheme();
  };

  return (
    <S.Section>
      <header className="s-header">
        <Typography
          className="s-title"
          as="h1"
          $size="6"
          $uppercase
          $fontWeight="600"
        >
          Playground
        </Typography>
      </header>
      <div className="s-content">
        <div className="box">
          <Button variation="success" onClick={handleToggleTheme}>
            Toggle Dark Theme
          </Button>
        </div>

        <div className="box -title">
          <Typography as="h2" $size="5" $fontWeight="500">
            Button
          </Typography>
        </div>

        <div className="box">
          <Button>Button</Button>
          <Button variation="primary">Button</Button>
        </div>

        <div className="box -title">
          <Typography as="h2" $size="5">
            Typography
          </Typography>
        </div>

        <div className="box">
          <Typography as="p" $size="1" $fontWeight="300">
            Lorem Ipsum
          </Typography>
          <Typography as="p">Lorem ipsum</Typography>
          <Typography as="p" $color="1" $size="6" $fontWeight="500">
            Lorem ipsum
          </Typography>
          <Typography
            as="p"
            $color="5"
            $size="7"
            $fontWeight="500"
            $letterSpacing="2px"
            $uppercase
          >
            Lorem ipsum
          </Typography>
        </div>

        <div className="box">
          <Typography as="p" $color="info">
            Info
          </Typography>
          <Typography as="p" $color="success">
            Success
          </Typography>
          <Typography as="p" $color="warning">
            Warning
          </Typography>
          <Typography as="p" $color="danger">
            Danger
          </Typography>
        </div>
      </div>
    </S.Section>
  );
};

export default PagePlayground;
