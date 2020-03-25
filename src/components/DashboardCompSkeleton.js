import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card, CardContent, Grid } from "@material-ui/core";
import ReactLoading from "react-loading";

export default function DashboardCompSkeleton({ color }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <Card>
          <CardContent>
            <h1>
              <Skeleton />
            </h1>
            <ReactLoading type="bars" color="orange" height={400} width={400} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <Card>
          <CardContent>
            <h1>
              <Skeleton />
            </h1>
            <ReactLoading type="spin" color="orange" height={400} width={400} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
