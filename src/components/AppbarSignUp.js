import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import logoApp from "../assets/logos/Warung-Q_logo_draft_2.png";

export default function AppbarSignUp({ color }) {
  return (
    <>
      <AppBar style={{ backgroundColor: color }}>
        <Toolbar>
          <img src={logoApp} alt="Warung-Q" style={{ width: 80 }} />
          <Typography variant="h6" style={{ fontWeight: "bold", flexGrow: 1 }}>
            Warung-Q
          </Typography>
          <Box>
            <Button style={{ marginLeft: 30 }}>
              <Link
                to="/signin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sign In
              </Link>
            </Button>
            <Button
              variant="container"
              style={{ backgroundColor: "white", marginLeft: 30 }}
            >
              <Link
                to="/signup"
                style={{ color: color, textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
