import React from "react";
import { Grid, Box, Typography, Hidden } from "@material-ui/core";
import Lottie from "react-lottie";
import dashboardAnimData from "../assets/lottieFiles/17665-dashboard.json";
import WithSizes from "react-sizes";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid3({ color, screenHeight, screenWidth }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dashboardAnimData,
    rendererSettings: {
      preservedAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Grid
      container
      spacing={3}
      direction="row-reverse"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: "white",
        minHeight: screenHeight,
        minWidth: screenWidth
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box style={{ marginLeft: 60, marginRight: 60, textAlign: "center" }}>
          <Typography variant="h4" style={{ color: color }}>
            In Warung-Q website, you have ability to check your market's chart,
            therefore you are able to calculate your sales everytime.
          </Typography>
          <Typography variant="h4" style={{ color: color }}>
            You can also manage your products as easy as possible, such as
            inserting your product data which includes stocks, price, or expired
            date. Then, manage your products if any changes are neccessary.
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
