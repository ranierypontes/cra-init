import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

import { useAuth } from "../../../contexts/all";

import { Button } from "../../../components/All";
import * as S from "./styled";

const FormLogin = () => {
  const { signIn } = useAuth();

  const initialValues = {
    loginEmail: "",
    loginPassword: "",
  };

  const validationSchema = Yup.object().shape({
    loginEmail: Yup.string()
      .required("Campo obrigatório")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Digite um email válido"
      ),
    loginPassword: Yup.string().required("Campo obrigatório"),
  });

  const formOnSubmit = (values, { setSubmitting }) => {
    const auth = {
      username: values.loginEmail,
      password: values.loginPassword,
    };
    signIn(auth, setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={formOnSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        handleSubmit,
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <S.Form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="id_loginEmail">
              Email
            </label>
            <input
              className={`form-control ${
                touched.loginEmail && errors.loginEmail ? "-is-invalid" : ""
              }`}
              id="id_loginEmail"
              name="loginEmail"
              placeholder="email@email.com"
              type="email"
              value={values.loginEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.loginEmail && errors.loginEmail && (
              <span className="error-message">{errors.loginEmail}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="id_loginPassword">
              Senha
            </label>
            <input
              className={`form-control ${
                touched.loginPassword && errors.loginPassword
                  ? "-is-invalid"
                  : ""
              }`}
              id="id_loginPassword"
              name="loginPassword"
              placeholder="●●●●●●●●●●●"
              type="password"
              value={values.loginPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.loginPassword && errors.loginPassword && (
              <span className="error-message">{errors.loginPassword}</span>
            )}
          </div>

          <div className="form-group">
            <Button
              type="submit"
              variation="primary"
              full
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Entrar
            </Button>
          </div>

          <div className="form-footer -center">
            <p className="paragraph">
              Ainda não tem cadastro?{" "}
              <RouterLink className="link" to="/cadastrar">
                Crie uma conta agora
              </RouterLink>
            </p>
          </div>
        </S.Form>
      )}
    </Formik>
  );
};

export default FormLogin;
