import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";
import Error from "../Components/Error";
import axios from "axios";
import Loading from "../Components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfrimPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setpicMessage] = useState(null);

  const history = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      history("/home");
    }
  }, [history, userInfo]);

  return (
    <Header title="Register">
      {error && <Error variant="danger" children={error} />}
      {message && <Error variant="danger" children={message} />}
      {loading && <Loading />}
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
            value={confirmPassword}
            onChange={(e) => setconfrimPassword(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="pic">
          <Form.Label>Set Picture</Form.Label>
          <Form.File
            id="custom-file"
            type="image/png"
            placeholder="Upload Profile Picture"
            value={pic}
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </Form.Group> */}

        <Button
          variant="info"
          type="submit"
          size="sm"
          style={{ bottom: "0px", margin: "0px" }}
        >
          Submit
        </Button>
      </Form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Header>
  );
}

export default Register;
