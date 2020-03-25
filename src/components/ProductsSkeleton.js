import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card, CardContent } from "@material-ui/core";

export default function DashboardCompSkeleton() {
  return (
    <div style={{ fontSize: 20, lineHeight: 2 }}>
      <Card>
        <CardContent>
          <h1>
            <Skeleton />
          </h1>
          <Skeleton count={8} />
        </CardContent>
      </Card>
    </div>
  );
}
