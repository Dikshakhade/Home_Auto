import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./home.css";
import io from "socket.io-client";
function Home() {
  const flag = false;
  const [state, setState] = useState(0);
  const socket = io.connect("http://localhost:5000");
  const handler = () => {
    socket.emit("send_message", { message: 0 });
  };
  useEffect(() => {
    async function fetchData() {
      console.log(`beg value of state = ${state}`);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      return await axios
        .post("/users/home", { state }, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
    console.log(`end value of state= ${state}`);
  }, [state]);

  return (
    <div>
      <h1>Hello Diksha....</h1>
      <button onClick={handler}>clickkkkkk</button>
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
