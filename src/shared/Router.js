import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Mainpage from "../pages/Mainpage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;