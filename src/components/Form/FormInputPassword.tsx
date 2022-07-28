import { Form } from 'react-bootstrap'
const FormInputPassword = () => {
  return (
    <Form.Group className="mb-3">
        <Form.Label>
            Password
        </Form.Label>
        <Form.Control type="password" name="password" placeholder="Enter password" />
    </Form.Group>
  )
}

export default FormInputPassword