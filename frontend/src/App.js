import React from "react";
import Mainscreen from "./Pages/Mainscreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import NavHeading from "./Components/NavHeading";

function App() {
  return (
    <div className="App">
      <NavHeading />

      <Routes>
        <Route path="/" element={<Mainscreen />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
