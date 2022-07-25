import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

interface FormInputTextProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
}

const FormInputText = ({
  label,
  value,
  onChange,
  name,
  placeholder
}: FormInputTextProps) => {
  
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

FormInputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FormInputText;
