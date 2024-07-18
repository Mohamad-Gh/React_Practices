import React from "react";
import { useGlobalContext } from "../Context";

function Search({ handleSubmit, handleChange, handleClick }) {
  const { searchTerm } = useGlobalContext;
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="type favorite meal"
          className="form-input"
          value={searchTerm}
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
