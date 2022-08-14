import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Navbar = () => (
  <AppBar position="static" color="error">
    <Container maxWidth="xl">
      <Toolbar>
        <Link to="/">
          <FitnessCenterIcon
            sx={{
              color: "#fff",
              mr: "40px",
              border: "1px solid #fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: "5px",
            }}
          />
        </Link>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Fitness Academy
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
