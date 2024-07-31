import React from "react";
import Chart from "react-apexcharts";

function StockChart({ chartData, symbol }) {
  const option = {
    title: {
      text: { symbol },
      align: "center",
      style: { fontSize: "24px", color: "red" },
      chart: { id: "stock data" },
      xaxis: { type: "datetime" },
    },
  };
  const series = [{ name: symbol, data: chartData }];
  return (
    <div
      style={{ backgroundColor: "rgba(145, 158, 171, 0.04" }}
      className="mt-5 p-4 shadow-sm bg-white"
    >
      <Chart
        options={option}
        series={series}
        type="candlestick"
        width={"100%"}
      />
    </div>
  );
}

export default StockChart;
