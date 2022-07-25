import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark">
      <Container fluid>
        <h5 className="text-white">Tasks App</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link text-white text-decoration-none">
              Home
            </Link>
            <Link
              to="/create"
              className="nav-link text-white text-decoration-none"
            >
              Create tasks
            </Link>
            <Link
              to="/login"
              className="nav-link text-white text-decoration-none"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
