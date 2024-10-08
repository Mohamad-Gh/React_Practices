import React, { useState } from "react";
import { useGlobalContext } from "../../Context/Context";

function Search() {
  const [text, setText] = useState("");
  const { setTerm, fetchRandomMeal } = useGlobalContext();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setTerm(text);
      setText("");
    } else {
      setTerm(" ");
    }
  };

  const handleRandomMeal = () => {
    setTerm("");
    setText("");
    fetchRandomMeal();
  };
  return (
    <header className="search-container dark:bg-gray-900 dark:text-white duration-200">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="type favorite meal"
          className="form-input dark:bg-gray-500"
          value={text}
        />
        <button type="submit" className="btn">
          search
        </button>
        <button
          onClick={handleRandomMeal}
          type="button"
          className="btn btn-hipster"
        >
          suprise me !
        </button>
      </form>
    </header>
  );
}

export default Search;
