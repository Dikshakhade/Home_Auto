import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./fan.css";
function Fan() {
  const [fanstate, setfanstate] = useState(0);
  useEffect(() => {
    console.log(`state is ${fanstate}`);
  }, [fanstate]);
  return (
    <div style={{ display: "flex", margin: "5rem" }}>
      <div>
        <div class="fan">
          <input
            className="fan-input"
            type="checkbox"
            id="fan-btn"
            onChange={(e) => {
              if (e.target.checked) setfanstate(1);
              else setfanstate(0);
            }}
          />
          <label for="fan-btn" className="fan-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div class="fan-base"></div>
        </div>
      </div>
    </div>
  );
}

export default Fan;
