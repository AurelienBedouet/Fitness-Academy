import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="100px" padding="50px 0" bgcolor="#d32f2f" color="#fff">
    <Typography
      variant="body2"
      sx={{ fontSize: { lg: "16px", xs: "14px" } }}
      align="center"
    >
      Copyright ©{new Date().getFullYear()} | Fitness Academy
    </Typography>
  </Box>
);

export default Footer;
