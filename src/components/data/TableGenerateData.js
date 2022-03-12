import React from "react";
import { useState, useEffect } from "react";
import DataTable from "../DataTable";

function TableGenerateData({ data }) {
  /* declare tableData state */
  const [tableData, setTableData] = useState([
    {
      id: 1,
      category: "phone",
      os: "android",
      country: "USA",
      date: "2019-01-01",
      status: "Connected",
    },
    {
      id: 2,
      category: "tablet",
      os: "iOS",
      country: "Algeria",
      date: "2022-03-11",
      status: "Connected",
    },
    {
      id: 3,
      category: "desktop",
      os: "Windows",
      country: "France",
      date: "2021-01-01",
      status: "Connected",
    },
    {
      id: 4,
      category: "Smart TV",
      os: "Android",
      country: "Australia",
      date: "2021-06-01",
      status: "Connected",
    },
  ]);

  /* List of categories, os and countries to random pick up each 10sec */
  const categories = ["phone", "tablet", "desktop", "Smart TV"];
  const os = ["iOS", "Windows", "Android"];
  const country = ["USA", "Algeria", "France", "Australia"];
  const status = ["Connected", "Disconnected"];

  /* random date for each render update */
  let randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toLocaleDateString();
  };

  /* function that return random number */
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  /* use useEffect Hook to update random values and re-render component */
  useEffect(() => {
    const interval = setInterval(() => {
      setTableData(
        tableData.map(
          (current) =>
            (current = {
              id: randomIntFromInterval(0, 100000000),
              category:
                categories[randomIntFromInterval(0, categories.length - 1)],
              os: os[randomIntFromInterval(0, os.length - 1)],
              country: country[randomIntFromInterval(0, country.length - 1)],
              date: randomDate(new Date(2009, 0, 1), new Date()),
              status: status[randomIntFromInterval(0, status.length - 1)],
            })
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <DataTable data={tableData} />
    </>
  );
}

export default TableGenerateData;
