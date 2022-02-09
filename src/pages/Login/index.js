import React from "react";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useNavigate } from "react-router-dom";

import Container from "../../styles/settings/container";
import { CardAuth, Typography, FormLogin } from "../../components/All";
import example from "../../assets/images/img-example.jpg";
import * as S from "./styles";

const PageLogin = ({ accountConfirmation }) => {
  // let navigate = useNavigate();
  // const SweetAlert = withReactContent(Swal);

  // useEffect(() => {
  //   if (accountConfirmation) {
  //     SweetAlert.fire({
  //       title: "Sucesso!",
  //       text: "Seu email foi verificado.",
  //       icon: "success",
  //       // timer: 2500,
  //       showCloseButton: false,
  //       showConfirmButton: true,
  //       allowOutsideClick: false,
  //       confirmButtonText: "Fazer login",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/entrar", { replace: true });
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main>
      <S.Section>
        <header>
          <h1 className="visually-hidden">Entrar</h1>
        </header>
        <S.SectionContent className="s-content">
          <Container>
            <CardAuth className="card">
              <div className="c-header">
                <Typography className="c-title" as="span" $size="6">
                  Login
                </Typography>
                <FormLogin />
              </div>
              <div className="c-content">
                <img className="img" src={example} alt="Conectado" />
              </div>
            </CardAuth>
          </Container>
        </S.SectionContent>
      </S.Section>
    </main>
  );
};

export default PageLogin;
