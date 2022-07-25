import React from "react";
import PropTypes from "prop-types";
import { FloatingLabel, Form } from "react-bootstrap";

interface FormInputTextAreaProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
}

const FormInputTextArea = ({
  label,
  value,
  onChange,
  name,
  placeholder
}: FormInputTextAreaProps) => {
  return (
    <FloatingLabel label={label} className="mb-3">
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        rows={3}
      />
    </FloatingLabel>
  );
};

FormInputTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FormInputTextArea;
