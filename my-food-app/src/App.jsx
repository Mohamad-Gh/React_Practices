import React from "react";
import Home from "./pages/Home";
import Foods from "./pages/Foods";
import SelectedMeal from "./pages/SelectedMeal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Foods" element={<Foods />} />
          <Route path="Foods/:mealTitle" element={<SelectedMeal />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
