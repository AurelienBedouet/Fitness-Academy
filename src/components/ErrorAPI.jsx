import React from "react";
import Loader from "./Loader";
import { Box, Typography } from "@mui/material";

const ErrorAPI = () => {
  return (
    <Box sx={{ mt: { lg: "200px", xs: "80px" } }}>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "32px", xs: "20px" } }}
        maxWidth="800px"
        m="0 auto"
        textAlign="center"
        border="2px solid #d32f2f"
        p="5px"
      >
        Problem fetching data from the API. Try again later.
      </Typography>
      <Loader />
    </Box>
  );
};

export default ErrorAPI;
