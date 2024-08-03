import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { ContextProvider } from "../src/context/Context";
import "./App.css";

function App() {
  return (
    <main className="container">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </main>
  );
}

export default App;
