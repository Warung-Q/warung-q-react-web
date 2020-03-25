import React from "react";
import { Grid, Box, Typography, Container } from "@material-ui/core";
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
      alignItems="center"
      style={{
        backgroundColor: color,
        minHeight: screenHeight - 530
      }}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Container>
          <Box>
            <Typography variant="h4" style={{ color: "white" }}>
              Footer
            </Typography>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default WithSizes(mapSizestoProps)(HomeGrid3);
