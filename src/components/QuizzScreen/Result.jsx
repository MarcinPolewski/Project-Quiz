
import { proccessQuizResults } from "../../ResultProcesser";

export default function Result({ userAnswers }) {
    const { percentage, classification, notes, image } = proccessQuizResults(userAnswers);

    return (
        <div className="result">
            <h1>Result of polishness test:</h1>
            <h2>You have scored {percentage}%, therefore you have been classified as {classification}</h2>
            <img src={image} alt={classification} />
            <p>{notes}</p>
        </div>
    );
}