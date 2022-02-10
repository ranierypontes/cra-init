import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";

// import { useAuth } from "../../../contexts/all";

import { Button } from "../../../components/All";
import * as S from "./styled";

const FormLogin = () => {
  // const { signIn } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Campo obrigatório")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Digite um email válido"
      ),
    password: Yup.string().required("Campo obrigatório"),
  });

  const formOnSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // const auth = {
    //   username: values.loginEmail,
    //   password: values.loginPassword,
    // };
    // signIn(auth, setSubmitting);
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
              placeholder="●●●●●●●●●●●"
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
