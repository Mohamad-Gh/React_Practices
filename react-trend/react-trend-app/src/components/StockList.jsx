import React, { useState, useEffect } from "react";
import finnHub from "../Apis/Axios";
function StockList() {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState(null);

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
        console.log(err);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }

  return <div>ok</div>;
}

export default StockList;
