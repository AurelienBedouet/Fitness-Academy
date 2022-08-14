import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

import Flexing from "../assets/icons/flexing.png";
import Muscle from "../assets/icons/muscle.png";
import BenchPress from "../assets/icons/bench-press.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: Flexing,
      name: bodyPart,
    },
    {
      icon: Muscle,
      name: target,
    },
    {
      icon: BenchPress,
      name: equipment,
    },
  ];

  return (
    <Grid container spacing={8} sx={{ p: "20px" }} alignItems="center">
      <Grid item xs={12} md={5}>
        <Box>
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            style={{
              width: "540px",
              margin: " 0 auto",
              borderRadius: "15px",
              boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Stack sx={{ gap: { lg: "32px", xs: "20px" } }}>
          <Typography
            component="h1"
            color="error"
            sx={{ fontSize: { lg: "48px", xs: "32px" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            <span style={{ textTransform: "capitalize" }}>{name}</span> is an
            exercise targeting your {target}. It will{" "}
            {bodyPart === "cardio"
              ? "improve your endurance."
              : `help you grow your muscles in the ${bodyPart} area.`}
            {equipment === "body weight"
              ? " You don't need any equipment for this exercise."
              : ` You will need a ${equipment} for this exercise.`}
          </Typography>
          {extraDetail?.map(item => (
            <Stack
              key={item.name}
              direction="row"
              gap="32px"
              alignItems="center"
            >
              <img src={item.icon} alt={item.name} width={48} />
              <Typography
                textTransform="uppercase"
                sx={{ fontSize: { lg: "24px", xs: "18px" } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Detail;
