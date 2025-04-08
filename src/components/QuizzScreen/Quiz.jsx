import { useState, useRef, useEffect, useCallback } from 'react';

import Question from './Question';
import Timer from './Timer';

const SELECT_MODE = 0;
const RESULT_MODE = 1;

const TIMER_DURATION = 3000;
const NEXT_QUESTION_DELAY = 500;
const NO_ANSWER_SELECTED = -1;

export default function Quiz({ question, answers, rightAnswerIndex, switchToNextQuestion }) {

    const [mode, setMode] = useState(SELECT_MODE);
    const timerRef = useRef(null);
    const wasTransitionScheduled = useRef(false);


    const handleTransition = useCallback((answerIdx) => {
        if (!wasTransitionScheduled.current) {
            wasTransitionScheduled.current = true;
            setTimeout(() => { switchToNextQuestion() }, NEXT_QUESTION_DELAY);
        }
        setMode(RESULT_MODE);
    }, [switchToNextQuestion]);

    const handleTimerEnd = useCallback(() => {
        handleTransition(NO_ANSWER_SELECTED);
    }, [handleTransition]);


    useEffect(() => {
        timerRef.current = setTimeout(handleTimerEnd, TIMER_DURATION);
        return () => { clearTimeout(timerRef.current) };

    }, [handleTimerEnd]);

    function handleAnswerSelect(answerIdx) {
        clearTimeout(timerRef.current);
        handleTransition(answerIdx);
    }



    const headingContent = (mode === SELECT_MODE ? "Select an answer" : "Next one incomming...");

    return (
        <>
            <h1>{headingContent}</h1>
            <Timer key={mode} duration={mode === SELECT_MODE ? TIMER_DURATION : NEXT_QUESTION_DELAY} />
            <Question
                question={question}
                answers={answers}
                correctAnswerIdx={rightAnswerIndex}
                onSelect={handleAnswerSelect}
                areButtonsDisabled={mode === RESULT_MODE}
            />
        </>);

}