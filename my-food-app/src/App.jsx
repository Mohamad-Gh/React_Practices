import React from "react";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import aos from "aos";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Foods />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
