import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import creatingAnim from "../assets/lottieFiles/17343-programming.json";
import WithSizes from "react-sizes";
import SignUpForm from "./SignUpFormStepper";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function SignUpGrid({ color, screenHeight, screenWidth }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: creatingAnim,
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
            style={{ maxWidth: 400 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">
              Experience the easist way of managing your market. Sign up and
              build your market management of your own.
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
          <SignUpForm color={color} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(SignUpGrid);
