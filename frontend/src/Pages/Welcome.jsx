import React from "react";
import "./welcome.css";
import light from "../Pages/images/turn-off.png";
import fan from "../Pages/images/fan.png";
import ac from "../Pages/images/air-conditioner.png";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="main-box">
      <div className="box">
        <div className="pic">
          <img src={light} onClick={() => navigate("/light")} />
        </div>
        <div className="description">Lighten Your Rooms</div>
      </div>
      <div className="box">
        <div className="pic">
          <img src={fan} onClick={() => navigate("/fan")} />
        </div>
        <div className="description">Feeling Hot??</div>
      </div>
      <div className="box">
        <div className="pic">
          <img src={ac} />
        </div>
        <div className="description">Want to go out in snow</div>
      </div>
    </div>
  );
}

export default Welcome;
