import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";
import Error from "../Components/Error";
import { register, reset } from "../features/auth/authSlice";
import Loading from "../Components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      seterror(message);
    }
    if (isSuccess || userData) {
      navigate("/welcome");
    }
    dispatch(reset());
  }, [userData, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== password1) {
      console.log("Password do not match ");
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Header title="Register">
      {error && <Error variant="danger" children={error} />}
      {message && <Error variant="danger" children={message} />}
      {isLoading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="info"
          type="submit"
          size="sm"
          style={{ bottom: "0px", margin: "0px" }}
        >
          Submit
        </Button>
      </Form>

      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Header>
  );
}

export default Register;
