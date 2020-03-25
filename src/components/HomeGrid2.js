import React from "react";
import { Grid, Box, Typography, Hidden } from "@material-ui/core";
import logoNoCircle from "../assets/logos/Warung-Q_logo_draft_2.2.png";
import WithSizes from "react-sizes";

const mapSizestoProps = ({ width, height }) => ({
  screenHeight: height,
  screenWidth: width
});

function HomeGrid2({ color, screenHeight, screenWidth }) {
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
            Inspired from those market activities, Warung-Q presents to the
            world for the best solution in managing product sales in people's
            own market.
          </Typography>
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
          <img
            src={logoNoCircle}
            alt="Warung-Q-Logo"
            style={{
              maxHeight: screenHeight,
              maxWidth: 800
            }}
          />
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid2);
