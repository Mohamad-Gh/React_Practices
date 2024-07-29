import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import finnHub from "../Apis/Axios";
function StockList() {
  const { watchList, deleteStock, setSearch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const navigate = useNavigate();

  const changeColor = (string) => {
    return parseInt(string) > 0
      ? "success"
      : parseInt(string) < 0
      ? "danger"
      : "";
  };
  const icon = (string) => {
    return parseInt(string) > 0 ? <BsCaretUpFill /> : <BsCaretDownFill />;
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((stock) => {
            return finnHub.get("/query", {
              params: { function: "GLOBAL_QUOTE", symbol: stock },
            });
          })
        );
        console.log("responses", responses);
        const data = responses.map((element) => {
          return element.data["Global Quote"];
        });
        console.log("data", data);
        if (isMounted) {
          setStock(data);
        }
        setLoading(false);
      } catch (err) {
        watchList.pop();
        console.log(err);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [watchList]);
  if (loading) {
    return <div>Loading ...</div>;
  }
  const handleSelectedStock = (stockSymbol) => {
    navigate(`detail/${stockSymbol}`);
  };

  return (
    <div>
      <table className="table hover mt-5">
        <thead style={{ color: "rgb(79,89,102)" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((stock) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleSelectedStock(stock["01. symbol"]);
              }}
              className="table-row"
              key={stock["01. symbol"]}
              id={stock["01. symbol"]}
            >
              <th scope="row">{stock["01. symbol"]}</th>
              <td>{stock["09. change"]}</td>
              <td className={"text-" + changeColor(stock["09. change"])}>
                {stock["09. change"]}
                {icon(stock["09. change"])}
              </td>
              <td
                className={"text-" + changeColor(stock["10. change percent"])}
              >
                {stock["10. change percent"]}
                {icon(stock["10. change percent"])}
              </td>
              <td>{stock["03. high"]}</td>
              <td>{stock["04. low"]}</td>
              <td>{stock["02. open"]}</td>
              <td>{stock["08. previous close"]}</td>
              <td
                onClick={() => {
                  deleteStock(stock["01. symbol"]);
                  setSearch("");
                }}
              >
                <button>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
