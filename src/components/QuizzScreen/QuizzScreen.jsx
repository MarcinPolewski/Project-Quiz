import Screen from "../Screen/Screen"
import { CONTENT } from "../../assets/text/QuizzContent";
import { useState, useEffect, useRef, useCallback } from "react";
import Quiz from "./Quiz";
import Result from "./Result";


const NO_ANSWER_SELECTED = -1;
const NEXT_QUESTION_DELAY = 3000;

export default function QuizzScreen() {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentQuestionIdx = userAnswers.length;
    const quizIsFinished = currentQuestionIdx >= CONTENT.length;

    const handleAnswerSelect = useCallback((answerIdx) => {
        setUserAnswers((prevState) => {
            return [...prevState, answerIdx];
        });
    }, [setUserAnswers]);

    let contentToRender;
    if (quizIsFinished) {
        contentToRender = <Result userAnswers={userAnswers.map((userAnswers, idx) => userAnswers === CONTENT[idx].rightAnswerIndex)} />
    }
    else {
        const question = CONTENT[currentQuestionIdx].question;
        const answers = CONTENT[currentQuestionIdx].answers;
        const rightAnswerIndex = CONTENT[currentQuestionIdx].rightAnswerIndex;

        contentToRender = <Quiz
            key={currentQuestionIdx}
            question={question}
            answers={answers}
            rightAnswerIndex={rightAnswerIndex}
            switchToNextQuestion={handleAnswerSelect}
        />
    }


    return (<Screen>
        {contentToRender}
    </Screen>);

}