import Screen from "../Screen/Screen"
import { CONTENT } from "../../assets/text/QuizzContent";
import { useState, useEffect, useRef } from "react";
import Answers from "./Answers/Answers"
import Timer from "./Timer"

export default function () {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const question = CONTENT[currentQuestionIdx].question;
    const answers = CONTENT[currentQuestionIdx].answers;
    const timerRef = useRef();

    return (<Screen>
        <Timer duration={3000} onEnd={handleTimerEnd} ref={timerRef} />
        <h1>{question}</h1>
        <Answers answers={answers} onSelect={handleAnswerSelect} />
    </Screen>);

    // ==================

    function handleAnswerSelect(answerIndex) {

        timerRef.current.stopTimer();
        console.log("timerStopped");
        // stop timer - must be first 
        // have timer here
        // use imperative handle
        // timer can be declared here
        // check answer 
        // display appropriate feedback 
        // change question - set state
    }

    function handleTimerEnd() {

    }

    function nextQuestion() {
        setCurrentQuestionIdx((prevIdx) => prevIdx + 1)
    }

}