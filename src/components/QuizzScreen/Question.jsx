import { useState } from "react";

export default function Question({ question, answers, areButtonsDisabled, correctAnswerIdx, onSelect }) {
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
        <div>
            <h1>{question}</h1>
            <div>
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
            </div>
        </div>
    );
}