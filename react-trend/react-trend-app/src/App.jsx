import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage />} />
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
