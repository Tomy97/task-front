import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { TaskContextProvider } from "./context/TaskProvider";
import { routes } from "./routes/routes";
const App = () => {
  return (
    <TaskContextProvider>
      <NavbarComponent />
      <Container>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Container>
    </TaskContextProvider>
  );
};

export default App;
