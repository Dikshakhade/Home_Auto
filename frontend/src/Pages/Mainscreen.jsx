import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "./mainscreen.css";
import NavHeading from "../Components/NavHeading";
function Mainscreen() {
  return (
    <>
      <main>
        <div id="content">
          <div id="content-text">
            <h1>
              <span>Home</span> <u>Automa</u>tion
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit pariatur
              quibusdam voluptatem pariatur dolore.
            </h2>

            <div>
              <a href="/register">
                <button>Sign Up</button>
              </a>
              <a href="/login">
                <button>Login</button>
              </a>
            </div>
          </div>
          <img
            class="header-image"
            src="https://www.automatedbuildings.com/news/jun21/articles/allied/Home%20Automation%20and%20Control.jpg"
          />
        </div>
      </main>
    </>
  );
}
export default Mainscreen;
