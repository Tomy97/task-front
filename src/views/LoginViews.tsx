import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import FormInputEmail from "../components/Form/FormInputEmail";
import FormInputPassword from "../components/Form/FormInputPassword";
import SpinnerComponent from "../components/SpinnerComponent";
import { useLoading } from "../hook/useLoading";
import { ILogin } from "../interfaces/users.intrerfaces";
import "../styles/Card.scss";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El Email ingresado no es valido")
    .required("Required"),
  password: Yup.string()
    .min(6, "Los caracteres minimos son 6")
    .required("Required")
});

const LoginViews = () => {
  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: ""
  });
  const { loading, setSearch } = useLoading(false);
  const showLoading = () => {
    if (loading === true) {
      return <SpinnerComponent />;
    } else {
      return <ButtonComponent title="Enviar" />;
    }
  };
  return (
    <Row className="justify-content-center py-5">
      <Col md={12} lg={3}>
        <Card className="card-style">
          <Card.Body>
            <Card.Title className="text-center">Login Form</Card.Title>
            <Formik
              initialValues={userData}
              enableReinitialize={true}
              validationSchema={loginSchema}
              onSubmit={async (values, _actions) => {
                if (values) {
                  await setSearch(true);
                  await localStorage.setItem(
                    "user",
                    JSON.stringify(values.email)
                  );
                  setTimeout(() => {
                    setSearch(false);
                  }, 2000);
                }
                await setUserData(values);
              }}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12} className="mb-3">
                      <FormInputEmail
                        name="email"
                        value={values.email}
                        placeholder="Ingresar el email"
                        onChange={handleChange}
                      />
                      {errors.email && touched.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </Col>
                    <Col md={12} className="mb-3">
                      <FormInputPassword
                        name="password"
                        value={values.password}
                        placeholder=" Ingresar el password"
                        onChange={handleChange}
                      />
                      {errors.password && touched.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </Col>
                    <Col md={12} className="text-center">
                      {showLoading()}
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginViews;
