import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.png";
import "./mainnav.css";
function MainNav() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="main-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img                                             //aspect-ratio = 72:29.3
            src={logo}
            width="108vw"
            height="43.95vh"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="main-nav" href="#home">How it</Nav.Link>
            <Nav.Link className="main-nav" href="#link">Testimonials</Nav.Link>
            <Nav.Link className="main-nav" href="#link">About Us</Nav.Link>
            <Nav.Link className="main-nav" href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
