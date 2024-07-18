import "./App.css";
import React, { useState, useEffect } from "react";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App({ handleSubmit, handleChange, handleClick }) {
  return (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </>
  );
}

export default App;
