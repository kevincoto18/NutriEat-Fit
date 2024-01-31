import "../styles/menu.css";
import { Navbar, Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" id="titulo">
        NutriEat Fit
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="navbar-nav">
          <Nav.Link href="#" className="nav-link active">
            Inicio
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Recetas
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Sobre Nosotros
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
