import React, {useState} from 'react';
import {Box} from '@mui/material';
import {ErrorBoundary} from 'react-error-boundary';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function ErrorFallback({error}) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{color: 'red'}}>{error.message}</pre>
        </div>
    );
}

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box>
            <HeroBanner />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
            </ErrorBoundary>
        </Box >
    );
};

export default Home;