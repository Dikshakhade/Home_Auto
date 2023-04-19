import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import io from "socket.io-client";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (isError) {
      setError(message);
      console.log(message);
    }
    if (isSuccess || userData) {
      navigate("/welcome");
    }
    dispatch(reset());
  }, [userData, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <div>
      <Header title="Login">
        {error && <Error variant="danger" children={error} />}
        {isLoading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div>
            New Customer ? <Link to="/register"> Register here </Link>
          </div>
        </Form>
      </Header>
    </div>
  );
}

export default Login;
