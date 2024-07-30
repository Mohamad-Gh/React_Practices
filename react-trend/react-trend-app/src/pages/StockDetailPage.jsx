import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alphaVantage, { dateLooper } from "../Apis/Axios";
import StockChart from "../components/StockChart";

function StockDetailPage() {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await alphaVantage.get("/query", {
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: symbol,
            outputsize: "compact",
          },
        });
        console.log(response.data);
        setChartData(dateLooper(response.data["Time Series (Daily)"]));
        console.log("chartData", chartData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>StockDetailPage {symbol}</div>
      {!chartData ? (
        <h3>Loading ...</h3>
      ) : (
        <StockChart chartData={chartData} symbol={symbol} />
      )}
    </div>
  );
}

export default StockDetailPage;
