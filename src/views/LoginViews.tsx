import { Card, Col, Form, Row } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import FormInputEmail from "../components/Form/FormInputEmail";
import FormInputPassword from "../components/Form/FormInputPassword";
import '../styles/Card.scss';
const LoginViews = () => {
  return (
    <Row className="justify-content-center py-5">
      <Col md={12} lg={3}>
        <Card className="card-style" >
          <Card.Body>
            <Form>
              <h2 className="text-center">Login Form</h2>
              <Row>
                <Col md={12}>
                  <FormInputEmail />
                </Col>
                <Col md={12}>
                  <FormInputPassword />
                </Col>
                <Col md={12}>
                  <ButtonComponent title="Enviar" />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginViews;
