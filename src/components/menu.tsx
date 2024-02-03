import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/menu.css";

function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg={scrolled ? "dark" : "light"}
      expand="lg"
      className={scrolled ? "scrolled" : ""}
    >
      <Navbar.Brand
        href="#"
        id="titulo"
        className={scrolled ? "text-white" : ""}
      >
        NutriEat Fit
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="navbar-nav">
          <Nav.Link
            href="#"
            className={`nav-link ${scrolled ? "text-white" : ""}`}
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            href="#"
            className={`nav-link ${scrolled ? "text-white" : ""}`}
          >
            Recetas
          </Nav.Link>
          <Nav.Link
            href="#"
            className={`nav-link ${scrolled ? "text-white" : ""}`}
          >
            Calculadora de Peso
          </Nav.Link>
          <Nav.Link
            href="#"
            className={`nav-link ${scrolled ? "text-white" : ""}`}
          >
            Sobre Nosotros
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
