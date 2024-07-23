import React, { useState, useEffect } from "react";
import finnHub from "../Apis/Axios";
function StockList() {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/quote", {
          params: { symbol: "AAPL" },
        });
        console.log(response.data);

        // setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }

  return <div>StockList</div>;
}

export default StockList;
