import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alphaVantage, { dateLooper } from "../Apis/Axios";
import StockChart from "../components/StockChart";

function StockDetailPage() {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState("");
  const [dateFormat, setDateFormat] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      let path = "";
      switch (dateFormat) {
        case "Weekly":
          path = "";
          break;
        case "Monthly":
          path = "Monthly Time Series";
          break;
        default:
          path = "Time Series (Daily)";
      }
      try {
        const response = await alphaVantage.get("/query", {
          params: {
            function:
              dateFormat == "weekly"
                ? "TIME_SERIES_WEEKLY"
                : dateFormat == "monthly"
                ? "TIME_SERIES_MONTHLY"
                : "TIME_SERIES_DAILY",
            symbol: symbol,
            outputsize: "compact",
          },
        });
        console.log(response.data.Information);
        setChartData(dateLooper(response.data[path]));
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
        <div>
          <StockChart
            chartData={chartData}
            symbol={symbol}
            dateFormat={dateFormat}
          />
          <div>
            <button onClick={() => setDateFormat("Daily")}>daily</button>
            <button onClick={() => setDateFormat("Weekly")}>weekly</button>
            <button onClick={() => setDateFormat("Monthly")}>monthly</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDetailPage;
