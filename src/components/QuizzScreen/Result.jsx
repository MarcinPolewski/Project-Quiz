
import { proccessQuizResults } from "../../ResultProcesser";

export default function Result({ userAnswers }) {
    const { percentage, classification, notes, image } = proccessQuizResults(userAnswers);

    return (
        <div className="result">
            <h1>Report of Polishness:</h1>
            <h2>You have been classified as: {classification}</h2>
            <img src={image} alt={classification} />
            <h3>You scored {percentage}%</h3>
        </div>
    );
}