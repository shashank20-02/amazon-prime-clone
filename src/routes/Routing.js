import React from "react";
import { Routes, Route } from "react-router-dom";
import Channels from "../components/Channels";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Rowhover from "../components/Rowhover";
function Routing() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Home />} />
        <Route path="/channel" element={<Channels />} />
        <Route path="/rowComponent" element={<Rowhover />} />
      </Routes>
    </div>
  );
}

export default Routing;
