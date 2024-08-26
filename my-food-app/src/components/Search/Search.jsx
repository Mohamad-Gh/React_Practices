import React, { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  //   const { setTerm, fetchRandomMeal } = useGlobalContext();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      //   setTerm(text);
      setText("");
    }
  };

  const handleRandomMeal = () => {
    setTerm("");
    setText("");
    // fetchRandomMeal();
  };
  return (
    <header className="search-container dark:bg-gray-900 dark:text-white duration-200">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="type favorite meal"
          className="form-input"
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
