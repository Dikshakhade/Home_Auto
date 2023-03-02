import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     // history("/home", { replace: true });
  //     <Navigate to="/home" replace={true} />;
  //   }
  // });
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  let history = useNavigate();
  useEffect(() => {
    if (userInfo) {
      // redirect("/home");
      history("/home");
      // <Navigate to="/home" replace={true} />;
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div>
      <Header title="Login">
        {error && <Error variant="danger" children={error.message} />}
        {loading && <Loading />}
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

          <p>
            New Customer ? <Link to="/register"> Register here </Link>
          </p>
        </Form>
      </Header>
    </div>
  );
}

export default Login;
