import React from "react";
import { Grid, Box, Typography, Hidden } from "@material-ui/core";
import Lottie from "react-lottie";
import barcodeScannerAnim from "../assets/lottieFiles/7242-barcode-scanner.json";
import WithSizes from "react-sizes";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid3({ color, screenHeight, screenWidth }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: barcodeScannerAnim,
    rendererSettings: {
      preservedAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: color,
        minHeight: screenHeight,
        minWidth: screenWidth
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box style={{ marginLeft: 60, marginRight: 60, textAlign: "center" }}>
          <Typography variant="h4" style={{ color: "white" }}>
            Warung-Q Mobile App provides cashier-based technology to handle
            transaction in your market in you smartphone. You can track the
            transaction histories as well in your gadget.
          </Typography>
          <br />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Hidden only={["xs", "sm"]}>
          <Lottie
            options={defaultOptions}
            height={screenHeight - 100}
            style={{ maxWidth: 700 }}
          />
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid3);
