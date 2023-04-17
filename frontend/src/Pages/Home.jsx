import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./home.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function Home() {
  const flag = false;
  const [state, setState] = useState(0);
  const handler = () => {
    socket.emit("send_message", { message: state });
  };
  useEffect(() => {
    console.log(`end value of state= ${state}`);
  }, [state]);

  return (
    <div>
      <h1>Hello Diksha....</h1>
      {/* <button onClick={handler}>clickkkkkk</button> */}
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
          variant="info"
          size="lg"
          value={state}
          onChange={(e) => {
            if (e.target.checked) setState(1);
            else setState(0);
            handler();
          }}
        />
      </Form>
      <div className="wrap1">
        {state && (
          <div
            style={{ backgroundColor: "yellow", height: "50vh", width: "50vw" }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Home;
