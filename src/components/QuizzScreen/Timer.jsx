import { useState, useEffect } from 'react';

export default function Timer({ duration }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const UPDATE_INTERVAL = 50;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - UPDATE_INTERVAL);
        }, UPDATE_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return <progress max={duration} value={timeLeft} />

    // ===================


}