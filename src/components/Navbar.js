import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor : "navy",color : "#fff"}}>
        <Container fluid>
          <Navbar.Brand style={{color : "#fff"}}>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")}>
                <span className="fw-semibold"  style={{color : "#fff"}}>Product</span>
              </Nav.Link>
              {/* <Nav.Link onClick={()=> navigate("/cart")}>Cart</Nav.Link> */}
            </Nav>
            <Nav.Link>
              <div className="fw-bold" onClick={() => navigate("/cart")}>
                Cart item : {items.length}
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
