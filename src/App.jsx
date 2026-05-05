import React from "react";
import { Route, Routes } from "react-router-dom";
import Contect from "../src/pages/Contect";
import Home from "../src/pages/Home";
import Project from "../src/pages/Project";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/contect" element={<Contect/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
