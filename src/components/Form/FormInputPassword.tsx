import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { ILoginInputs } from "../../interfaces/users.intrerfaces";

const FormInputPassword = ({
  name,
  value,
  placeholder,
  onChange
}: ILoginInputs) => {
  return (
    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
};

FormInputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInputPassword;
