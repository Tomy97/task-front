import { Form } from "react-bootstrap";

const FormInputEmail = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" />
    </Form.Group>
  );
};

export default FormInputEmail;
