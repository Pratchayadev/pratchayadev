import { Box, Container, Grid } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Grid container rowSpacing={1}>
          <Grid item xs={4}>
            <span>test</span>
          </Grid>
          <Grid item xs={4}>
          <span>test</span>
          </Grid>
          <Grid item xs={4}>
          <span>test</span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Navbar;
