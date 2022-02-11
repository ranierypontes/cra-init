import React from "react";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useNavigate } from "react-router-dom";

import {
  CardAuth,
  Typography,
  FormForgotPassword,
} from "../../../components/All";
import * as S from "./styles";

const PageForgotPassword = () => {
  // let navigate = useNavigate();
  // const SweetAlert = withReactContent(Swal);

  return (
    <main>
      <S.Section>
        <header>
          <h1 className="visually-hidden">Esqueci minha senha</h1>
        </header>
        <S.SectionContent className="s-content">
          <div className="container">
            <CardAuth className="card">
              <div className="c-header">
                <Typography className="c-title" as="span" $size="6">
                  Esqueci minha senha
                </Typography>
                <FormForgotPassword />
              </div>
            </CardAuth>
          </div>
        </S.SectionContent>
      </S.Section>
    </main>
  );
};

export default PageForgotPassword;
