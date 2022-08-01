import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { ILoginInputs } from "../../interfaces/users.intrerfaces";

const FormInputEmail = ({
  name,
  value,
  placeholder,
  onChange
}: ILoginInputs) => {
  return (
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};

FormInputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInputEmail;
