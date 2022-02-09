import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../contexts/all";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import termsOfUse from "../../../assets/files/termos-de-uso.pdf";

import { Button } from "../../../components/All";

import * as S from "./styled";

const FormRegister = () => {
  const { signUp } = useAuth();
  let navigate = useNavigate();

  const initialValues = {
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerTerms: false,
  };

  const validationSchema = Yup.object().shape({
    registerName: Yup.string().required("Campo obrigatório"),
    registerEmail: Yup.string()
      .required("Campo obrigatório")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Digite um email válido"
      ),
    registerPassword: Yup.string().required("Campo obrigatório"),
    registerTerms: Yup.boolean()
      .required("Você precisa aceitar os termos de uso.")
      .oneOf([true], "Você precisa aceitar os termos de uso."),
  });

  const formOnSubmit = async (values, { resetForm }) => {
    const payload = {
      name: values.registerName,
      email: values.registerEmail,
      password: values.registerPassword,
      terms: values.registerTerms,
    };

    await signUp(payload);
    navigate("/conta", { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={formOnSubmit}
      validateOnChange={true}
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
            <label className="label" htmlFor="id_registerName">
              Nome
            </label>
            <input
              className={`form-control ${
                touched.registerName && errors.registerName ? "-is-invalid" : ""
              }`}
              id="id_registerName"
              name="registerName"
              placeholder="Ex.: José Maria da Silva"
              type="text"
              value={values.registerName}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.registerName && errors.registerName && (
              <span className="error-message">{errors.registerName}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="id_loginEmail">
              Email
            </label>
            <input
              className={`form-control ${
                touched.registerEmail && errors.registerEmail
                  ? "-is-invalid"
                  : ""
              }`}
              id="id_registerEmail"
              name="registerEmail"
              placeholder="email@email.com"
              type="email"
              value={values.registerEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.registerEmail && errors.registerEmail && (
              <span className="error-message">{errors.registerEmail}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="id_loginPassword">
              Senha
            </label>
            <input
              className={`form-control ${
                touched.registerPassword && errors.registerPassword
                  ? "-is-invalid"
                  : ""
              }`}
              id="id_loginPassword"
              name="registerPassword"
              placeholder="No mínimo 8 caracteres"
              type="password"
              value={values.registerPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.registerPassword && errors.registerPassword && (
              <span className="error-message">{errors.registerPassword}</span>
            )}
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              name="registerTerms"
              id="id_registerTerms"
              checked={values.registerTerms}
              onChange={handleChange}
              // onBlur={handleBlur}
            />
            <label className="text" htmlFor="id_registerTerms">
              Aceito os{" "}
              <a
                className="link"
                // href={termsOfUse}
                href="https://google.com"
                title="Termos de uso"
                target="_blank"
                rel="noreferrer"
              >
                termos de uso
              </a>
            </label>

            <div className="check-error">
              {touched.registerTerms && errors.registerTerms && (
                <span className="error-message">{errors.registerTerms}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <Button
              type="submit"
              variation="primary"
              full
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Criar conta
            </Button>
          </div>

          <div className="form-footer -center">
            <p className="paragraph">
              Já possui cadastro?{" "}
              <RouterLink className="link" to="/entrar">
                Faça o login agora
              </RouterLink>
            </p>
          </div>
        </S.Form>
      )}
    </Formik>
  );
};

export default FormRegister;
