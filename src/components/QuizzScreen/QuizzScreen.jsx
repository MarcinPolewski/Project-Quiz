import Screen from "../Screen/Screen"
import { CONTENT } from "../../assets/text/QuizzContent";
import { useState, useEffect, useRef } from "react";
import Quiz from "./Quiz";


const NO_ANSWER_SELECTED = -1;
const NEXT_QUESTION_DELAY = 3000;

export default function QuizzScreen({ onEnd }) {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIdx = userAnswers.length;

    const question = CONTENT[currentQuestionIdx].question;
    const answers = CONTENT[currentQuestionIdx].answers;
    const rightAnswerIndex = CONTENT[currentQuestionIdx].rightAnswerIndex;

    function handleAnswerSelect(answerIdx) {
        setUserAnswers((prevState) => {
            return [...prevState, answerIdx];
        });
    }

    return (<Screen>
        <Quiz
            key={currentQuestionIdx}
            question={question}
            answers={answers}
            rightAnswerIndex={rightAnswerIndex}
            switchToNextQuestion={handleAnswerSelect}
        />
    </Screen>);




}