import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Team from "../components/Team";
import Pricing from "../components/Pricing";

function HomePage(props) {
  const { valueFromBlockchain, wallet } = props;
  return (
    <div>
      <Header valueFromBlockchain={valueFromBlockchain} wallet={wallet} />
      <Features />
      <Team />
      <Pricing />
      <Footer />
    </div>
  );
}

export default HomePage;
