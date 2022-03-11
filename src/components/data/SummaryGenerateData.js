import React from "react";
import { useState, useEffect } from "react";
import KeyFigureSummary from "../KeyFigureSummary";

function SummaryGenerateData({ data }) {

  /* declare summaryData state */
  const [summaryData, setsummaryData] = useState([
    {
      memory_usage: 78,
      cpu_usage: 50,
      edge: 100,
      devices: 30,
    },
  ]);

  /* function that return random number */
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  /* use useEffect Hook to update values and re-render component */
  useEffect(() => {
    const interval = setInterval(() => {
      setsummaryData(
        summaryData.map(
          (current) =>
            (current = {
              memory_usage: randomIntFromInterval(40, 100),
              cpu_usage: randomIntFromInterval(30, 100),
              edge: randomIntFromInterval(0, 300),
              devices: randomIntFromInterval(0, 1000),
            })
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <KeyFigureSummary data={summaryData} />
    </>
  );
}

export default SummaryGenerateData;
