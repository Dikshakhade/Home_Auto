import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

function NavHeading() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    history("/", { replace: true });
    // <Navigate to="/home" replace={true} />;
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home Automation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <NavDropdown title="Diksha" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/plans">
              Our Plans
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeading;
