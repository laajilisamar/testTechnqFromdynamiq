import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap"; 
import {  Col, Image } from 'react-bootstrap';


function Navigation() {
  const navbarStyle = {
    backgroundImage: 'url("/src/image/color.jpg")',  
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={navbarStyle}>
      <Link className="navbar-brand" to="#">
      <Col xs={6} md={4}>
          <Image src="Arsl.jpeg" roundedCircle style={{ width: '100px', height: '100px' }} />
        </Col>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">
              Form
            </Link>
          </li>
        </ul>
      </div>
      <i className="fas fa-user"></i>
      <NavDropdown  title={<span>Account </span>} id="basic-nav-dropdown" className="me-5 text-decoration-none">
        <NavDropdown.Item as={Link} to="/signin"> Sign In <i className="fas fa-sign-in-alt"></i></NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/signup"> Sign Up <i className="fas fa-user-plus"></i></NavDropdown.Item>
      </NavDropdown>
    </nav>
  );
}

export default Navigation;
