import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import { TaskI } from "../interfaces/task.interfaces";
import { useNavigate } from "react-router-dom";
import { deleteTasksRequest } from "../services/task.service";
import "../styles/Card.css";

const CardComponent = ({ id, title, description }: TaskI) => {
  const handleDelete = async () => {
    await deleteTasksRequest(id);
  };
  const navigate = useNavigate();
  return (
    <Card className="mt-3 card-style ">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Row>
          <Col sm={12} md={6}>
            <Button variant="primary" className="buttons-styles" onClick={ () => navigate( `/edit/${id}` ) } >
              Editar Task
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <Button
              variant="danger"
              className="buttons-styles"
              onClick={handleDelete}
            >
              Eliminar Task
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

CardComponent.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CardComponent;
