import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";
//
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <NavLink className="navbar-brand" to="/">
        NicoTech
      </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {/* <NavLink className="nav-link" to="category/Arma_tu_pc">
            Arma Tu Pc
          </NavLink> */}
          <NavLink className="nav-link" to="category/Pc_Armada">
            Pc Armadas
          </NavLink>

          <NavDropdown title="Hardware" id="navbarScrollingDropdown">
            <NavLink className="nav-link" to="category/Procesadores">
              Procesadores
            </NavLink>
            <NavLink className="nav-link" to="category/Mothers">
              Mothers
            </NavLink>
            <NavLink className="nav-link" to="category/Almacenamiento">
              Almacenamiento
            </NavLink>
            <NavLink className="nav-link" to="category/Ram">
              Ram
            </NavLink>
            <NavLink className="nav-link" to="category/Fuentes">
              Fuentes
            </NavLink>
          </NavDropdown>
          <NavDropdown title="Perifericos" id="navbarScrollingDropdown">
            <NavLink className="nav-link" to="category/Teclados">
              Teclados
            </NavLink>
            <NavLink className="nav-link" to="category/Mouses">
              Mouses
            </NavLink>
            <NavLink className="nav-link" to="category/Monitores">
              Monitores
            </NavLink>
            <NavLink className="nav-link" to="category/Auriculares">
              Auriculares
            </NavLink>
          </NavDropdown>
          <NavLink className="nav-link" to="/Consulta">
            Consulta
          </NavLink>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
      <CartWidget />
    </Container>
  </Navbar>
);
