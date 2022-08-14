import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    {/* Similar Target Muscle */}
    <Typography
      component="h2"
      sx={{
        fontSize: { lg: "40px", md: "32px", xs: "24px" },
        textAlign: { xs: "center", lg: "left" },
        lineHeight: "1.2",
      }}
      fontWeight={700}
      color="#000"
      mb="40px"
    >
      Similar{" "}
      <span style={{ color: "#d32f2f", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* Similar Equipment */}
    <Typography
      component="h2"
      sx={{
        fontSize: { lg: "40px", md: "32px", xs: "24px" },
        textAlign: { xs: "center", lg: "left" },
        lineHeight: "1.2",
      }}
      fontWeight={700}
      color="#000"
      mt="100px"
      mb="40px"
    >
      Similar{" "}
      <span style={{ color: "#d32f2f", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
