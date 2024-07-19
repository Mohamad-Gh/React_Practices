import "./App.css";
import React from "react";
// import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { useGlobalContext } from "./Context";

function App() {
  const { showModal } = useGlobalContext();
  return (
    <>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
