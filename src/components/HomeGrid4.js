import React from "react";
import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import WithSizes from "react-sizes";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid3({ color, screenHeight, screenWidth }) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: color,
        minHeight: screenHeight,
        minWidth: screenWidth
      }}
    >
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12}>
          <Container>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="h4" style={{ color: "white" }}>
                We are welcome to anyone who are just started with their market
                business. So, sign up for using our services. Together, we cand
                build a more manageamble market for our own customers.
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "white"
              }}
            >
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: color }}
              >
                Sign Up
              </Link>
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid3);
