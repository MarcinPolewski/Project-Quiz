import classes from "./Answers.module.css";

export default function Answers({ answers, onSelect }) {
    const renderableAnswers = answers.map((answer, index) =>
    (<button
        className={classes.answerButton}
        key={index}
        onClick={() => { onSelect(index) }}
    >
        {answer}
    </button>
    ));

    return (
        <div className={classes.answers} >
            {renderableAnswers}
        </div>
    );
}