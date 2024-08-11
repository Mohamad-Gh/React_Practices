import React from "react";
import AutoComplete from "../components/AutoComplete";
import StockList from "../components/StockList";
import Heading from "../components/Heading";
function StockOverviewPage() {
  return (
    <div>
      <Heading />
      <AutoComplete />
      <StockList />
    </div>
  );
}

export default StockOverviewPage;
