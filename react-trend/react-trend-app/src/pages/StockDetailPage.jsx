import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import finnHub from "../Apis/Axios";

function StockDetailPage() {
  const { symbol } = useParams();

  // useEffect(() => {
  //   fetchData = async () => {
  //     try {
  //       response = await finnHub.get();
  //     } catch (err) {}
  //   };
  // }, []);

  return <div>StockDetailPage {symbol}</div>;
}

export default StockDetailPage;
