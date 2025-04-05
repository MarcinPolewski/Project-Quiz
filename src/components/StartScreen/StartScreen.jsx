import { CONTENT } from "../../assets/text/StartScreenContent"
import Screen from "../Screen/Screen";

export default function ({ onStart }) {

    const paragraphs = CONTENT.paragraphs.map((text, idx) => <p key={idx}>{text}</p>);

    return (
        <Screen>
            <h1>{CONTENT.heading}</h1>
            {paragraphs}
            <button onClick={onStart}>Let's roll!</button>
        </Screen>
    );
}