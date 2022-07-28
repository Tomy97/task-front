import { Form, Formik } from "formik";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FormInputText from "../components/Form/FormInputText";
import FormInputTextArea from "../components/Form/FormInputTextArea";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Card.scss";
import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskProvider";
import { TaskI } from "../interfaces/task.interfaces";

const CreateTaskViews = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskI>({
    title: "",
    description: ""
  });
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(Number(params.id));
        if (task) {
          setTask({
            title: task.title,
            description: task.description,
          }); 
        }
      }
    };
    loadTask();
  }, []);
  return (
    <Container className="py-5">
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <Card className="card-style">
            <Card.Body>
              <Card.Title className="text-center">
                {params.id ? "Edit Task" : "Create Task"}
              </Card.Title>
              <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                  console.log(values);
                  if (params.id) {
                    await updateTask(Number(params.id), values);
                  } else {
                    await createTask(values);
                  }
                  navigate("/");
                  setTask({
                    title: "",
                    description: ""
                  });
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormInputText
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      placeholder="Ingrese un titulo para la tarea"
                      label="Title"
                    />
                    <FormInputTextArea
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      placeholder="Ingrese una descripcion para la tarea"
                      label="Description"
                    />
                    <Button type="submit" variant="primary">
                      Guardar
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateTaskViews;
