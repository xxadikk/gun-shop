import React from "react";
import Advantagesblock from "../components/Advantagesblock/Advantagesblock";
import RatesBlock from "../components/RatesBlock/RatesBlock";
import ApplicationBlock from "../components/ApplicationBlock/ApplicationBlock";

const HomePage = () => {
  return (
    <>
      <RatesBlock />
      <Advantagesblock />
      <ApplicationBlock />
    </>
  );
};

export default HomePage;
