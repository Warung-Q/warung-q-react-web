import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import workingDashAnim from "../assets/lottieFiles/17436-working.json";
import WithSizes from "react-sizes";
import SignInForm from "./SignInForm";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid3({ color, screenHeight, screenWidth }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: workingDashAnim,
    rendererSettings: {
      preservedAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: color,
        height: screenHeight,
        width: screenWidth
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={6}>
          <Lottie
            options={defaultOptions}
            height={screenHeight - 800}
            style={{ maxWidth: 500 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">
              Sign in and manage your own market
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <SignInForm color={color} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid3);
