import React, { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const [text, setText] = useState("");
  const { setTerm } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    setTerm(text);
    e.preventDefault();
  };
  const handleClick = () => {
    setTerm("random");
  };
  return (
    <header className="search-container">
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
        <button onClick={handleClick} type="button" className="btn btn-hipster">
          suprise me !
        </button>
      </form>
    </header>
  );
}

export default Search;
