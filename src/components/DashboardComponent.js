import React from "react";
import { Grid } from "@material-ui/core";
import SalesChart from "./SalesChart";
import PieProductChart from "./PieProductChart";

export default function DahsboardComponent() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <SalesChart />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <PieProductChart />
      </Grid>
    </Grid>
  );
}
