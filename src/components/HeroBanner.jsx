import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "200px", xs: "80px" } }}>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Typography
          component="h1"
          sx={{ fontSize: { xl: "60px", md: "44px", xs: "30px" } }}
        >
          Welcome to the Fitness Academy
        </Typography>
        <Typography variant="h5" component="p">
          Learn thousands of exercises targeting different body parts and using
          different kind of equipments!
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
