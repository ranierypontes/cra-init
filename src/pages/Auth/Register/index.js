import React from "react";

import { CardAuth, Typography, FormRegister } from "../../../components/All";
import * as S from "./styles";

const PageRegister = () => (
  <main>
    <S.Section>
      <header>
        <h1 className="visually-hidden">Cadastrar</h1>
      </header>
      <S.SectionContent className="s-content">
        <div className="container">
          <CardAuth className="card">
            <div className="c-header">
              <Typography className="c-title" as="span" $size="6">
                Crie sua conta
              </Typography>
              <FormRegister />
            </div>
          </CardAuth>
        </div>
      </S.SectionContent>
    </S.Section>
  </main>
);

export default PageRegister;
