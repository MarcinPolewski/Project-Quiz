import { useState, useRef, useEffect } from 'react';

import Question from './Question';
import Timer from './Timer';

const SELECT_MODE = 0;
const RESULT_MODE = 1;

const TIMER_DURATION = 3000;
const NEXT_QUESTION_DELAY = 1000;
const NO_ANSWER_SELECTED = -1;

export default function Quiz({ question, answers, rightAnswerIndex, switchToNextQuestion }) {

    const [mode, setMode] = useState(SELECT_MODE);
    const timerRef = useRef(null);
    const wasTransitionScheduled = useRef(false);


    useEffect(() => {
        timerRef.current = setTimeout(handleTimerEnd, TIMER_DURATION);
        return () => { clearTimeout(timerRef.current) };

    })

    function handleAnswerSelect(answerIdx) {
        clearTimeout(timerRef.current);
        handleTransition(answerIdx);
    }


    function handleTimerEnd() {
        handleTransition(NO_ANSWER_SELECTED);
    }

    function handleTransition(answerIdx) {
        if (!wasTransitionScheduled.current) {
            wasTransitionScheduled.current = true;
            setTimeout(() => { switchToNextQuestion() }, NEXT_QUESTION_DELAY);
        }
        setMode(RESULT_MODE);
    }




    return (
        <>
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