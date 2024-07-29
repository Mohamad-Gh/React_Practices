import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import alphaVantage from "../Apis/Axios";

function StockDetailPage() {
  const { symbol } = useParams();

  useEffect(() => {
    fetchData = async () => {
      try {
        response = await alphaVantage.get("/query", {
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: "",
            outputsize: "compact",
          },
        });
        console.log(response.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return <div>StockDetailPage {symbol}</div>;
}

export default StockDetailPage;
