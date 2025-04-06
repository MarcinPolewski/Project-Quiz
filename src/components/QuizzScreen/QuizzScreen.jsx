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
    const currentQuestionIdx = quizState.userAnswers.length;

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
        topContent = <Timer key={currentQuestionIdx} duration={3000} onEnd={handleTimerEnd} />;
    }

    return (<Screen>
        {topContent}
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
        console.log("timer ended");
        if (quizState.answerIdx === NO_ANSWER_SELECTED) {
            setQuizState((prevState) => ({
                ...prevState,
                isResultDisplayed: true
            }));
        }
        scheduleTransitionToNextQuestion();

    }
    function scheduleTransitionToNextQuestion() {
        console.log("schedule transition to next question");
        setTimeout(nextQuestion, NEXT_QUESTION_DELAY);
    }


    function nextQuestion() {
        console.log("next question");
        setQuizState((prevState) => ({
            userAnswers: [...prevState.userAnswers],
            answerIdx: NO_ANSWER_SELECTED,
            isResultDisplayed: false
        }));
    }

}