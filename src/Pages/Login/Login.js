import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import google from "../../images/Google__G__Logo.svg.png";
const Login = () => {
  const { handleGoogleSignIn, users } = useAuth();

  return (
    <div className="login-section">
      <Container>
        <Row>
          <div className="main-form-section shadow p-3 mb-5 bg-body rounded">
            <h1>Please Login</h1>
            <div className="login-form-section">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="login-form-btn">
                  <Button type="submit">Log In</Button>
                </div>
              </Form>
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
