import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";

import "./App.css";
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl" sx={{width: {lg: "95%", xs: "100%"}, m: "auto", p: {lg: 0, xs: "0 10px"}}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
            </Container>
            <Footer />
        </>
    );
};

export default App;