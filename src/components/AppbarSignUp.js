import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppbarSignUp({ color }) {
  return (
    <>
      <AppBar style={{ backgroundColor: color }}>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
