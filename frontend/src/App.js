import React from "react";
import Mainscreen from "./Pages/Mainscreen";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import NavHeading from "./Components/NavHeading";
import Fan from "./Pages/fan/Fan";
import Welcome from "./Pages/Welcome";
import Living from "./Pages/light/Living";
import Beedroom from "./Pages/light/Beedroom";
import Dining from "./Pages/light/Dining";
import Ac from "./Pages/air-conditioner/Ac";

function App() {
  return (
    <div className="App">
      <NavHeading />
      <Routes>
        <Route path="/" element={<Mainscreen />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/light-living" element={<Living />} />
        <Route path="/light-bedrooms" element={<Beedroom />} />
        <Route path="/light-dining" element={<Dining />} />
        <Route path="/fan" element={<Fan />} />
        <Route path="/ac" element={<Ac />} />
      </Routes>
    </div>
  );
}

export default App;
