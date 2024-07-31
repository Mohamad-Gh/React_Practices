import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alphaVantage, { dateLooper, cal } from "../Apis/Axios";
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
        console.log(response.data.Information);
        setChartData(dateLooper(response.data["Time Series (Daily)"]));
      } catch (err) {
        console.log(err);
      }
    };
    // setChartData(dateLooper(cal));

    fetchData();
    console.log(chartData ? chartData : "no Chart Data");
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
