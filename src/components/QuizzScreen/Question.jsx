
import AnswerButtons from "./AnswerButtons";
import classes from "./Question.module.css";

export default function Question({ question, answers, areButtonsDisabled, correctAnswerIdx, onSelect }) {
    return (
        <div className={classes.question}>
            <h1>{question}</h1>
            <AnswerButtons
                answers={answers}
                correctAnswerIdx={correctAnswerIdx}
                onSelect={onSelect}
                areButtonsDisabled={areButtonsDisabled}
            />
        </div>
    );
}