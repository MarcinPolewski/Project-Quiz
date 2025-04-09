import { useState } from "react";
import classes from "./AnswerButtons.module.css";

export default function AnswerButtons({ answers, areButtonsDisabled, correctAnswerIdx, onSelect }) {
    const [selectedAnswer, setSelectedAnswer] = useState(
        {
            index: null,
            isCorrect: null,
        }
    );

    function handleAnswerSelect(index) {
        setSelectedAnswer({
            index,
            isCorrect: index === correctAnswerIdx,
        });
        onSelect(index);
    }

    return (
        <div className={classes.answerButtons}>
            {answers.map((answer, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={selectedAnswer.index === index ? (selectedAnswer.isCorrect ? "goodSelection" : "wrongSelection")
                        : (index === correctAnswerIdx ? "intendedAnswer" : "")}
                    disabled={selectedAnswer.index !== null && (!areButtonsDisabled)}
                >
                    {answer}
                </button>
            ))}
        </div>);
}