import React from "react";
import { Stack, Typography } from "@mui/material";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)",
      border: bodyPart === item ? "4px solid #d32f2f" : "",
      background: "#fff",
      borderRadius: "15px",
      width: "200px",
      height: "200px",
      cursor: "pointer",
      gap: "24px",
      m: "10px 0",
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1250, left: 100, behavior: "smooth" });
    }}
  >
    <SportsGymnasticsIcon color="error" fontSize="large" />
    <Typography
      fontSize="22px"
      fontWeight="bold"
      fontFamily="serif"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
