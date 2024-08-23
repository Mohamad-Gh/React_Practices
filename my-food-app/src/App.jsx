import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/ServicesComponent/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
export default function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
      </div>
    </>
  );
}
