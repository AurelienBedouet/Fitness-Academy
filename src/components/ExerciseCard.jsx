import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Stack
      sx={{
        minWidth: { xs: "260px", lg: "300px", xl: "330px" },
        background: "#fff",
        p: "20px",
        mb: "20px",
        borderRadius: "15px",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)",
        gap: "15px",
      }}
    >
      <Typography
        maxWidth="260px"
        height="60px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "20px", xs: "16px" } }}
        textTransform="capitalize"
        textAlign="center"
      >
        {exercise.name}
      </Typography>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="exercise-card-img"
      />
      <Stack direction="row" justifyContent="center" gap="20px">
        <Typography
          sx={{
            p: "10px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "15px",
            borderRadius: "5px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Typography>
        <Typography
          sx={{
            p: "10px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "15px",
            borderRadius: "5px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Typography>
      </Stack>
    </Stack>
  </Link>
);

export default ExerciseCard;
