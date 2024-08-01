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
      let path = null;
      switch (dateFormat) {
        case "Weekly":
          path = "Weekly Time Series";
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
              dateFormat == "Weekly"
                ? "TIME_SERIES_WEEKLY"
                : dateFormat == "Monthly"
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
  }, [dateFormat]);

  const handleButtonClass = (button) => {
    const classes = "btn - m-1 ";
    if (button === dateFormat) {
      return classes + "btn-primary";
    } else {
      return classes + "btn-outline-primary";
    }
  };

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
            <button
              className={handleButtonClass("Daily")}
              onClick={() => setDateFormat("Daily")}
            >
              daily
            </button>
            <button
              className={handleButtonClass("Weekly")}
              onClick={() => setDateFormat("Weekly")}
            >
              weekly
            </button>
            <button
              className={handleButtonClass("Monthly")}
              onClick={() => setDateFormat("Monthly")}
            >
              monthly
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDetailPage;
