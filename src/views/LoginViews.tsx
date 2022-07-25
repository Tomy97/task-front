import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const LoginViews = () => {
  return (
    <Row className="justify-content-center py-5">
      <Col md={12} lg={3}>
        <Card>
          <Card.Body>
            <Form>
              <h2 className="text-center">Login</h2>
              
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginViews;
