import classes from "./Result.module.css";

import { proccessQuizResults } from "../../ResultProcesser";

export default function Result({ userAnswers }) {
    const { percentage, classification, notes, image } = proccessQuizResults(userAnswers);

    return (
        <div className={classes.result}>
            <h1>Result of polishness test:</h1>
            <hr />
            <h2>You have scored {percentage}%, therefore you have been classified as {classification}</h2>
            <hr />
            <img className={classes.resultImg} src={image} alt={classification} />
            <hr />
            <h3>{notes}</h3>
        </div>
    );
}