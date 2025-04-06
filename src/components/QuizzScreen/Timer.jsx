import { useState, useEffect, useRef, useImperativeHandle } from 'react';

export default function Timer({ duration, onEnd }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const UPDATE_INTERVAL = 50;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                const newTimeLeft = prevTimeLeft - UPDATE_INTERVAL;
                if (newTimeLeft <= 0) {
                    clearInterval(interval);
                    onEnd();
                    return 0;
                }
                return newTimeLeft;
            });

            return (() => {
                clearInterval(interval);
            });
        }, UPDATE_INTERVAL)


    }, [])



    return <progress max={duration} value={timeLeft} />

    // ===================


}