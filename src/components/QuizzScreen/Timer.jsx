import { useState, useEffect, useRef, useImperativeHandle } from 'react';

export default function Timer({ duration, onEnd }) {
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


    useEffect(() => {
        const timer = setTimeout(() => {
            onEnd();
            // clearINterval?
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, []);



    return <progress max={duration} value={timeLeft} />

    // ===================


}