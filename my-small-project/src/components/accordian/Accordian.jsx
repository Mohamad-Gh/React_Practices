//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleList, setMultipleList] = useState(false);
  const [newList, setNewList] = useState([]);

  const handleMultipleButton = () => {
    setSelected(null);
    multipleList ? setNewList([]) : null;
    setMultipleList(!multipleList);
  };

  const handleSingleSelection = (id) => {
    selected == id ? setSelected(null) : setSelected(id);
  };

  const handleMultipleSelection = (id) => {
    !newList.includes(id)
      ? setNewList((prvs) => [...prvs, id])
      : setNewList(() => newList.filter((elements) => elements != id));
  };

  return (
    <div className="acc-wrapper">
      <button onClick={handleMultipleButton}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              id={dataItem.id}
              onClick={(event) => {
                let selectedId = event.currentTarget.id;
                !multipleList
                  ? handleSingleSelection(selectedId)
                  : handleMultipleSelection(selectedId);
              }}
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(multipleList && newList.includes(dataItem.id)) ||
              selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
