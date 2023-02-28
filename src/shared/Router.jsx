import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/project" exact element={<Project />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
