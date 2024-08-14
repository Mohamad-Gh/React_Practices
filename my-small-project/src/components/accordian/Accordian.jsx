//single selection
//multiple selection

import data from "./data";
import "./style.css";

export default function Accordian() {
  return (
    <div className="acc-wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="acc-content ">{dataItem.answer}</div>
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
