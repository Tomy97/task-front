import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import { useTasks } from "../context/TaskProvider";
import { TaskI } from "../interfaces/task.interfaces";
const TaksViews = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <h1>No hay tareas</h1>;
    }
    if (tasks.length > 0) {
      return tasks.map((task: TaskI) => (
        <Col
          sm={12}
          md={6}
          key={task.id}
          className="text-center d-flex justify-content-center"
        >
          <CardComponent
            title={task.title}
            description={task.description}
            id={task.id}
          />
        </Col>
      ));
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <Container className="py-5">
      <h3 className="text-center">Tasks Manager</h3>
      <Row className="align-items-center">{renderTasks()}</Row>
    </Container>
  );
};

export default TaksViews;
