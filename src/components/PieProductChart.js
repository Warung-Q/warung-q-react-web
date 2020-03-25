import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardContent } from "@material-ui/core";

export default function PieProductChart({ warungDatasets, products }) {
  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        data: products.map(
          product =>
            warungDatasets.filter(item => item.name === product.name).length
        ),
        backgroundColor: products.map((product, i) =>
          i % 3 === 0
            ? `rgba(${i + 9},${900 - (i + 1) * 5},${i * 2},1)`
            : i % 2 === 0
            ? `rgba(${i * 2},${i + 9},${900 - (i + 1) * 5},1)`
            : `rgba(${900 - (i + 1) * 5},${i * 2},${i + 9},1)`
        ),
        hoverBackgroundColor: products.map((product, i) =>
          i % 2 === 0
            ? `rgba(${i + 9},${900 - (i + 1) * 5},${i * 2},0.85)`
            : i % 2 === 0
            ? `rgba(${i * 2},${i + 9},${900 - (i + 1) * 5},0.85)`
            : `rgba(${900 - (i + 1) * 5},${i * 2},${i + 9},0.85)`
        )
      }
    ]
  };

  return (
    <Card style={{ minHeight: 425 }}>
      <CardHeader title="Yearly Products Sold" />
      <CardContent>
        <Pie
          data={data}
          height={420}
          options={{ maintainAspectRatio: false }}
        />
      </CardContent>
    </Card>
  );
}
