import "./App.css";
import React, { useState, useEffect } from "react";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  return (
    <>
      <h1>Hello, World</h1>
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </>
  );
}

export default App;
