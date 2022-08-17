import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import ErrorAPI from "./ErrorAPI";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(bodyPartsData);
      if (!bodyPartsData) return;
      else setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      if (!exercisesData) return;
      else {
        const searchedExercises = exercisesData.filter(
          item =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1250, left: 100, behavior: "smooth" });

        setSearch("");
        setExercises(searchedExercises);
      }
    }
  };

  if (!bodyParts.length) return <ErrorAPI />;

  return (
    <Box sx={{ mt: { lg: "200px", xs: "80px" } }}>
      <Stack
        gap="100px"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box
          sx={{
            position: "relative",
            width: { lg: "80%", xs: "100%" },
            p: "20px",
          }}
        >
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
        <Stack gap="20px">
          <Typography sx={{ fontSize: { lg: "24px", xs: "18px" } }} mb="24px">
            Search for an exercise, a body part or an equipement
          </Typography>
          <Box position="relative" mb="80px">
            <TextField
              sx={{
                input: { fontWeight: "700" },
                width: { lg: "960px", md: "780px", sm: "540px", xs: "360px" },
                backgroundColor: "#fff",
              }}
              className="search-input"
              value={search}
              onChange={e => setSearch(e.target.value.toLowerCase())}
              placeholder="Deadlift, arm, bench..."
              type="text"
            />
            <Button
              className="search-btn"
              sx={{
                bgcolor: "#D32F2F",
                color: "#fff",
                textTransform: "none",
                paddingInline: "32px",
                height: "100%",
                position: "absolute",
                right: "0px",
                fontSize: { lg: "20px", xs: "14px" },
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
