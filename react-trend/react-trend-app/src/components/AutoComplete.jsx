import React, { useState, useEffect } from "react";
import finnHub from "../Apis/Axios";
import { AppContext, useGlobalContext } from "../context/Context";

function AutoComplete() {
  const [results, setResults] = useState([]);
  const { addStock, search, setSearch } = useGlobalContext();
  const renderDropDown = () => {
    if (results.length > 0) {
      return "show";
    }
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: { q: search },
        });
        if (isMounted) {
          setResults(response.data.result);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
    return () => (isMounted = false);
  }, [search]);

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
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <label htmlFor="search">Search</label>
        <ul
          style={{
            height: "500px",
            overflowY: "scroll",
            overflowX: "hidden",
            cursor: "pointer",
          }}
          className={`dropdown-menu ${renderDropDown()}`}
        >
          {results.map((result) => {
            return (
              <li
                onClick={addStock}
                className="dropdown-item"
                key={result.symbol}
                id={result.symbol}
              >
                {result.description} ({result.symbol})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AutoComplete;
