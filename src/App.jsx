import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Project from "./Pages/Project";
import Pass from "./Pages/Pass";

function App() {
  return (
    <div className="text-white">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />}>
            <Route path="pass" element={<Pass />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
