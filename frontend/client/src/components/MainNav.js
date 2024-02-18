import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.png";
import "./mainnav.css";
function MainNav() {
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="/">
            <img //aspect-ratio = 72:29.3
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
              <Nav.Link className="main-nav mx-1 my-2" href="/">
                How it
              </Nav.Link>
              <Nav.Link className="main-nav mx-1 my-2" href="/testimonials">
                Testimonials
              </Nav.Link>
              <Nav.Link className="main-nav mx-1 my-2" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="main-nav mx-1 my-2" href="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link className="main-nav mx-1 my-2" href="/dashboard">
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{ color: "white" }} />
    </div>
  );
}

export default MainNav;
