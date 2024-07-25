import React, { useState } from "react";

function AutoComplete() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown">
        <input
          style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
          id="search"
          type="text"
          className="form-control"
          placeholder="Search"
          autoComplete="off"
          value={search}
          // onChange={}
        />
        <label htmlFor="search">Search</label>
        <ul className="dropdown-menu">
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul>
      </div>
    </div>
  );
}

export default AutoComplete;
