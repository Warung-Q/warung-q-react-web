import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default function SalesChart({ warungDatasets, datasets }) {
  const getTotal = data => {
    if (Array.isArray(data)) {
      if (data.length) {
        const totalResult = data.reduce((a, b) => ({
          total_price: a.total_price + b.total_price
        }));
        return totalResult.total_price;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  const januaryTotal = getTotal(datasets.januaryData);

  const februaryTotal = getTotal(datasets.februaryData);

  const marchTotal = getTotal(datasets.marchData);

  const aprilTotal = getTotal(datasets.aprilData);

  const mayTotal = getTotal(datasets.mayData);

  const juneTotal = getTotal(datasets.juneData);

  const julyTotal = getTotal(datasets.julyData);

  const augustTotal = getTotal(datasets.augustData);

  const septemberTotal = getTotal(datasets.septemberData);

  const octoberTotal = getTotal(datasets.octoberData);

  const novemberTotal = getTotal(datasets.novemberData);

  const decemberTotal = getTotal(datasets.decemberData);

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oktober",
      "November",
      "December"
    ],
    datasets: [
      {
        label: "Profit",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          januaryTotal,
          februaryTotal,
          marchTotal,
          aprilTotal,
          mayTotal,
          juneTotal,
          julyTotal,
          augustTotal,
          septemberTotal,
          octoberTotal,
          novemberTotal,
          decemberTotal
        ]
      }
    ]
  };

  return (
    <Card>
      <CardHeader title="Yearly Sales Summary" />
      <CardContent>
        <Line
          data={data}
          height={420}
          options={{ maintainAspectRatio: false }}
        />
      </CardContent>
    </Card>
  );
}
