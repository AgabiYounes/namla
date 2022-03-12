import React from "react";
import { useState, useEffect } from "react";
import ClusterChart from "../ClusterChart";

function GraphGenerateData({ data }) {
  /* declare tableData state */
  const [tableData, setTableData] = useState([
    {
      pourcentage: 86,
    },
    {
      pourcentage: 56,
    },
    {
      pourcentage: 10,
    },
    {
      pourcentage: 32,
    },
    {
      pourcentage: 99,
    },
    {
      pourcentage: 32,
    },
    {
      pourcentage: 75,
    },
  ]);

  /* function that return random number */
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  /* use useEffect Hook to update values and re-render component */
  useEffect(() => {
    const interval = setInterval(() => {
      setTableData(
        tableData.map(
          (current) =>
            (current = {
              pourcentage: randomIntFromInterval(0, 100),
            })
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ClusterChart data={tableData} />
    </>
  );
}

export default GraphGenerateData;
