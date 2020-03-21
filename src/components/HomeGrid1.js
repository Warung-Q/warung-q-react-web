import React from "react";
import { Grid, Box, Typography, Hidden } from "@material-ui/core";
import photo1 from "../assets/images/photo-of-apples-in-box-1837425.jpg";
import WithSizes from "react-sizes";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid1({ color, screenHeight, screenWidth }) {
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
              Market are everywhere. Each has their own management in handling
              in and out of the products. Managing their own market sometimes
              can be exhausting and put extra effort to control, either
              products, employees, and flow of their sales.
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
        <img
          src={photo1}
          alt="market"
          style={{ maxHeight: screenHeight - 100 }}
        />
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid1);
