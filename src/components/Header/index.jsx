import React from "react";
import { Navbar } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="ms-4" href="#">
        Books
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
