import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import alphaVantage from "../Apis/Axios";

function StockDetailPage() {
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        response = await alphaVantage.get("/query", {
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: symbol,
            outputsize: "compact",
          },
        });
        console.log("daily", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <div>StockDetailPage {symbol}</div>;
}

export default StockDetailPage;
