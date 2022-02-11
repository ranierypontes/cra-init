import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import { Link as RouterLink } from "react-router-dom";

// import { useAuth } from "../../../contexts/all";

import { Button } from "../../All";
import * as S from "./styled";

const FormResetPassword = () => {
  // const { signIn } = useAuth();

  const initialValues = {
    token: "",
    password: "",
    password_confirm: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Campo obrigatório"),
    password_confirm: Yup.string().required("Campo obrigatório"),
  });

  const formOnSubmit = (values, { setSubmitting }) => {
    console.log(values);
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
            <label className="label" htmlFor="password">
              Nova senha
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
            <label className="label" htmlFor="password_confirm">
              Confirmar nova senha
            </label>
            <input
              className={`form-control ${
                touched.password_confirm && errors.password_confirm
                  ? "-is-invalid"
                  : ""
              }`}
              id="password_confirm"
              name="password_confirm"
              placeholder="●●●●●●●●●●●"
              type="password"
              value={values.password_confirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.password_confirm && errors.password_confirm && (
              <span className="error-message">{errors.password_confirm}</span>
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
              Alterar senha
            </Button>
          </div>
        </S.Form>
      )}
    </Formik>
  );
};

export default FormResetPassword;
