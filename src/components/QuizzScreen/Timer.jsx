import { useState, useEffect, useRef, useImperativeHandle } from 'react';

export default function Timer({ duration, onEnd, ref }) {
    const [timeLeft, setTimeLeft] = useState(duration);
    const UPDATE_INTERVAL = 50;
    let interval = useRef(null);

    useEffect(() => {
        startTimer();
        return (() => { clearInterval(interval.current); })
    }, [])

    useImperativeHandle(ref, () => ({
        stopTimer: stopTimer,
    }));



    return <progress max={duration} value={timeLeft} />

    // ===================

    function updateTimer() {
        if (timeLeft - UPDATE_INTERVAL <= 0) {
            clearInterval(interval.current)
            onEnd()
        }
        else {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - UPDATE_INTERVAL);
        }
    }

    function startTimer() {
        interval.current = setInterval(updateTimer, UPDATE_INTERVAL);
    }

    function stopTimer() {
        clearInterval(interval.current);
    }

}