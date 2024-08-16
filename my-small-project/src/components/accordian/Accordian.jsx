//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleList, setList] = useState([]);
  const List = ["1", "2", "3", "4"];
  const [newList, setNewList] = useState([]);

  const handleMultipleSelection = () => {
    multipleList.length < 1 ? setList(List) : setList([]);
    console.log(multipleList);
  };
  return (
    <div className="acc-wrapper">
      <button onClick={handleMultipleSelection}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              id={dataItem.id}
              onClick={(event) => {
                let selectedId = event.currentTarget.id;
                selected == selectedId
                  ? setSelected(null)
                  : setSelected(selectedId);
                console.log(selectedId);
                multipleList.length > 0 && !newList.includes(selectedId)
                  ? setNewList((prvs) => [...prvs, selectedId])
                  : null;
              }}
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {newList.includes(dataItem.id) || selected === dataItem.id ? (
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
