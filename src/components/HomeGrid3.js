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
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: color,
        maxHeight: screenHeight,
        maxWidth: screenWidth
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Hidden only={["xs", "sm"]}>
          <Box style={{ marginLeft: 60, marginRight: 60, textAlign: "center" }}>
            <Typography variant="h4" style={{ color: "white" }}>
              With Warung-Q managing your own store is just a piece of cake. You
              can insert your product data, including stocks, price, or expired
              date.
            </Typography>
            <br />
            <Typography variant="h4" style={{ color: "white" }}>
              You can also check your market's chart, therefore you are able to
              calculate your sales everytime.
            </Typography>
          </Box>
        </Hidden>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Lottie
          options={defaultOptions}
          height={screenHeight - 100}
          style={{ maxWidth: 700 }}
        />
        {/* <Card style={{ marginRight: 60, marginLeft: 60 }}>
          <CardMedia
            image={photo1}
            title="market"
            style={{ height: screenHeight - 100, width: screenWidth }}
          />
        </Card> */}
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid3);
