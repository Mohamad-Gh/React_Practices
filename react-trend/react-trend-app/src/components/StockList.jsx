import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

import finnHub from "../Apis/Axios";
function StockList() {
  const { watchList, deleteStock } = useGlobalContext();
  console.log(watchList);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const changeColor = (number) => {
    return number > 0 ? "success" : number < 0 ? "danger" : "";
  };
  const icon = (number) => {
    return number > 0 ? <BsCaretUpFill /> : <BsCaretDownFill />;
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((stock) => {
            return finnHub.get("/quote", { params: { symbol: stock } });
          })
        );
        const data = responses.map((response) => {
          return { data: response.data, symbol: response.config.params.symbol };
        });
        if (isMounted) {
          setStock(data);
        }
        console.log("data:", data);
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
            <tr className="table-row" key={stock.symbol} id={stock.symbol}>
              <th scope="row">{stock.symbol}</th>
              <td>{stock.data.c}</td>
              <td className={"text-" + changeColor(stock.data.d)}>
                {stock.data.d}
                {icon(stock.data.d)}
              </td>
              <td className={"text-" + changeColor(stock.data.d)}>
                {stock.data.dp}
                {icon(stock.data.dp)}
              </td>
              <td>{stock.data.h}</td>
              <td>{stock.data.l}</td>
              <td>{stock.data.o}</td>
              <td>{stock.data.pc}</td>
              <td onClick={() => deleteStock(stock.symbol)}>
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
