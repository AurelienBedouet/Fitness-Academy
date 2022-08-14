import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Loader from "./Loader";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginBlock: { lg: "200px", xs: "80px" } }} p="20px">
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
        Watch{" "}
        <span style={{ color: "#d32f2f", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Videos{" "}
        <YouTubeIcon
          color="error"
          fontSize="inherit"
          sx={{ verticalAlign: "middle" }}
        />
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {exerciseVideos?.slice(0, 3)?.map((video, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: "360px",
                  aspectRatio: "16/9",
                  borderRadius: "15px",
                  boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)",
                }}
                src={video.video.thumbnails[0].url}
                alt={video.video.title}
              />
              <Box>
                <Typography
                  component="h5"
                  sx={{
                    fontSize: { lg: "20px", xs: "18px" },
                    lineHeight: "1.2",
                  }}
                  fontWeight={600}
                  color="#000"
                >
                  {video.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000" mt="8px">
                  {video.video.channelName}
                </Typography>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
