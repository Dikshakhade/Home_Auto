import React, { useState } from "react";
import "./ac.css";

function Ac() {
  const [ac, setac] = useState("27");
  const [value, setvalue] = useState(0);
  const acHandler = (e) => {
    setac(e.target.value);
  };
  return (
    <div className="ac-div">
      {value ? (
        <h2 className="ac-h2">AC IS ON</h2>
      ) : (
        <h2 className="ac-h2">AC IS OFF</h2>
      )}
      <input
        className="ac-input"
        type="text"
        placeholder="Set"
        value={ac}
        onChange={acHandler}
      ></input>
      <button
        className="ac-button"
        onClick={() => {
          setvalue(1);
        }}
      >
        Set Temperature
      </button>
      <button
        className="ac-button"
        onClick={() => {
          setvalue(0);
        }}
      >
        Off
      </button>
      {value && (
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div>
      )}
    </div>
  );
}

export default Ac;
