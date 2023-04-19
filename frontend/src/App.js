import React from "react";
import Mainscreen from "./Pages/Mainscreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Light from "./Pages/Light";
import NavHeading from "./Components/NavHeading";
import Fan from "./Pages/Fan";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div className="App">
      <NavHeading />
      <Routes>
        <Route path="/" element={<Mainscreen />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/light" element={<Light />} />
        <Route path="/fan" element={<Fan />} />
      </Routes>
    </div>
  );
}

export default App;
