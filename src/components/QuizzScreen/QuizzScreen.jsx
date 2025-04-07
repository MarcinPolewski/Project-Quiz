import Screen from "../Screen/Screen"
import { CONTENT } from "../../assets/text/QuizzContent";
import { useState, useEffect, useRef } from "react";
import Answers from "./Answers/Answers"
import Timer from "./Timer"


const NO_ANSWER_SELECTED = -1;
const NEXT_QUESTION_DELAY = 3000;

export default function () {
    const [quizState, setQuizState] = useState({
        userAnswers: [],
        answerIdx: NO_ANSWER_SELECTED,
        isResultDisplayed: false
    });
    const currentQuestionIdx = quizState.userAnswers.length - (quizState.isResultDisplayed ? 1 : 0);

    const question = CONTENT[currentQuestionIdx].question;
    const answers = CONTENT[currentQuestionIdx].answers;
    const rightAnswerIndex = CONTENT[currentQuestionIdx].rightAnswerIndex;


    let topContent;
    if (quizState.isResultDisplayed) {
        if (quizState.answerIdx === NO_ANSWER_SELECTED) {
            topContent = <h2>Time's up!</h2>
        }
        else {
            topContent = <h2>{quizState.answerIdx === rightAnswerIndex ? "Correct!" : "Wrong!"}</h2>
        }
    }
    else {
        topContent = <h2>" "</h2>
    }

    return (<Screen>
        {topContent}
        <Timer key={currentQuestionIdx} duration={3000} onEnd={handleTimerEnd} />
        <h1>{question}</h1>
        <Answers
            answers={answers}
            rightAnswerIndex={rightAnswerIndex}
            onSelect={handleAnswerSelect} />
    </Screen>);

    // ==================

    function handleAnswerSelect(answerIndex) {

        setQuizState((prevState) => ({
            ...prevState,
            userAnswers: [...prevState.userAnswers, answerIndex],
            isResultDisplayed: true
        }));

        scheduleTransitionToNextQuestion();
    }

    function handleTimerEnd() {
        if (quizState.answerIdx === NO_ANSWER_SELECTED) {
            setQuizState((prevState) => ({
                ...prevState,
                userAnswers: [...prevState.userAnswers, NO_ANSWER_SELECTED],
                isResultDisplayed: true
            }));
        }
        scheduleTransitionToNextQuestion();

    }
    function scheduleTransitionToNextQuestion() {
        setTimeout(nextQuestion, NEXT_QUESTION_DELAY);
    }


    function nextQuestion() {
        console.log("SWITCHING TO NEXT QUESTION");
        setQuizState((prevState) => ({
            userAnswers: [...prevState.userAnswers],
            answerIdx: NO_ANSWER_SELECTED,
            isResultDisplayed: false
        }));
    }

}