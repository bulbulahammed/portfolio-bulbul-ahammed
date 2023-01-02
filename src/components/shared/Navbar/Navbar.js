import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <h3 className="logo">BulBul</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          className="barIcon"
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span className="text-white"><FontAwesomeIcon icon={(fas, faBars)} /></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey="#home">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-area">
                  Contact
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
