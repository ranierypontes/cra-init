import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import { useAuth } from "../../../contexts/all";
import { Link as RouterLink } from "react-router-dom";
// import termsOfUse from "../../../assets/files/termos-de-uso.pdf";

import { Button } from "../../../components/All";

import * as S from "./styled";

const FormRegister = () => {
  // const { signUp } = useAuth();
  // let navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string()
      .required("Campo obrigatório")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Digite um email válido"
      ),
    password: Yup.string().required("Campo obrigatório"),
    terms: Yup.boolean()
      .required("Você precisa aceitar os termos de uso.")
      .oneOf([true], "Você precisa aceitar os termos de uso."),
  });

  const formOnSubmit = async (values, { resetForm }) => {
    console.log(values);
    // const payload = {
    //   name: values.registerName,
    //   email: values.registerEmail,
    //   password: values.registerPassword,
    //   terms: values.registerTerms,
    // };

    // await signUp(payload);
    // navigate("/conta", { replace: true });
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
            <label className="label" htmlFor="name">
              Nome
            </label>
            <input
              className={`form-control ${
                touched.name && errors.name ? "-is-invalid" : ""
              }`}
              id="name"
              name="name"
              placeholder="Ex.: José Maria da Silva"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.name && errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className={`form-control ${
                touched.email && errors.email ? "-is-invalid" : ""
              }`}
              id="email"
              name="email"
              placeholder="email@email.com"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.email && errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              Senha
            </label>
            <input
              className={`form-control ${
                touched.password && errors.password ? "-is-invalid" : ""
              }`}
              id="password"
              name="password"
              placeholder="No mínimo 8 caracteres"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.password && errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label className="label" htmlFor="terms">
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
            </div>

            <div className="check-error">
              {touched.terms && errors.terms && (
                <span className="error-message">{errors.terms}</span>
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
