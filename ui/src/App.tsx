import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import useApi from "./useApi";

type TimeSeriesData = {
  [key: string]: {
    "4. close": string;
    "5. adjusted close"?: string;
  };
};

function getSeries(data: TimeSeriesData): Array<[number, number]> {
  return Object.entries(data).map(([date, dataValue]) => {
    const adjustedClose = Number(dataValue["5. adjusted close"]);
    const close = Number(dataValue["4. close"]);

    return [new Date(date).getTime(), adjustedClose ? adjustedClose : close];
  });
}

function App() {
  const { loading, error, data } = useApi("/");

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error.name}</>;
  }

  const series = data?.["Time Series (Daily)"];

  if (!series) {
    return <>No data</>;
  }

  const timeSeriesData = getSeries(series);
  const options: Highcharts.Options = {
    title: {
      text: "AAPL",
    },
    series: [
      {
        name: "AAPL",
        type: "line",
        data: timeSeriesData,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  );
}

export default App;
