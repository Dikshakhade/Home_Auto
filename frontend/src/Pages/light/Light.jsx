import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./light.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function Light({ pic }) {
  const flag = false;
  const [state, setState] = useState(0);
  console.log(pic.toString());

  const handler = () => {
    socket.emit("send_message", { message: state });
  };
  useEffect(() => {
    console.log(`end value of state= ${state}`);
  }, [state]);

  return (
    <div
      className="main-div"
      // style={
      //   state
      //     ? {
      //         backgroundColor: "#ffdee9",
      //         backgroundImage:
      //           "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
      //       }
      //     : {}
      // }
    >
      <Form>
        {state ? (
          <p className="switch">TURN OFF</p>
        ) : (
          <p className="switch">TURN ON</p>
        )}

        <Form.Check
          type="switch"
          id="custom-switch"
          className="switch"
          size="lg"
          value={state}
          onChange={(e) => {
            if (e.target.checked) setState(1);
            else setState(0);
            // handler();
          }}
        />
      </Form>
      <div className="wrap1">
        <div
          className="room"
          style={
            state
              ? {
                  filter: "brightness(100%)",
                }
              : { filter: "brightness(10%)" }
          }
        >
          <img src={pic} />
        </div>
      </div>
    </div>
  );
}

export default Light;
