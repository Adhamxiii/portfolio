import React from "react";
import Hero from "./sections/Hero";
import Jobs from "./sections/Jobs";
import History from "./sections/History";
import Works from "./sections/Works";
import Connect from "./sections/Connect";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import Sidebar from "../components/Sidebar";


const Home = () => {
  return (
    <>
      <Sidebar />
      <Hero />
      <Jobs />
      <History />
      <Works />
      <Connect />
      <Quote />
      <Footer />
    </>
  );
};

export default Home;
