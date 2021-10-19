import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/eye-logo.jpg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { users, handleGoogleSignOut } = useAuth();
  return (
    <div>
      <div className="header-top-info shadow-sm p-3 ">
        <Container>
          <Row>
            <Col className="header-top text-center">
              <span>
                {" "}
                <i className="fas fa-map-marker-alt font-icon"></i>{" "}
                Dhaka,Uttora,BD
              </span>
              <span>
                {" "}
                <i className="far fa-clock font-icon"></i>
                Mn - St: 8:00am - 9:00pm
              </span>
              <span>Help Desk</span>|<span>Emergency Services</span>|
              <span>
                Appointment &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-phone font-icon"></i>
                +8801819878700
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="nav-area ">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand to="/home">
              <img src={logo} alt="logo" className="logo" />
              <span className="logo-style">Eye Care BD</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto text-uppercase nav-link-style">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/doctor">Doctors</NavLink>
                <NavLink to="/contact">contact us</NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end text-uppercase">
              <Nav className="nav-link-right">
                {users?.email ? (
                  <NavLink onClick={handleGoogleSignOut} to="/login">
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink to="/signup">Signup</NavLink>
                    <NavLink to="/login">Login</NavLink>
                  </>
                )}
              </Nav>

              {users.email ? (
                <div className="user-info">
                  <img src={users.photoURL} alt="" />
                  <p>{users.displayName}</p>
                </div>
              ) : (
                <></>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
