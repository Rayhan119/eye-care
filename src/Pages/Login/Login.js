import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import google from "../../images/Google__G__Logo.svg.png";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
  const {
    handleGoogleSignIn,
    users,
    signInEmailPassword,
    getEmail,
    getPassword,
    error,
  } = useAuth();
  console.log(signInEmailPassword);
  return (
    <div className="login-section">
      <Container>
        <Row>
          <div className="main-form-section shadow p-3 mb-5 bg-body rounded">
            <h1>Please Login</h1>
            <div className="login-form-section">
              <Form onSubmit={signInEmailPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onBlur={getEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onBlur={getPassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="login-form-btn">
                  <Button type="submit">Log In</Button>
                </div>
              </Form>
              <p className="mt-2 text-center toggle-link-style">
                <NavLink className="text-decoration-none" to="/signup">
                  Don't You Sign Up?
                  <span>Please Sign Up</span>
                </NavLink>
              </p>
              <hr />
            </div>

            <div className="google-signIn-section">
              <Button onClick={handleGoogleSignIn}>
                <img src={google} alt="" /> Google sign In
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
