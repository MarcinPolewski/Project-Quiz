import MeblościankaIage from "./assets/mebloscianka.jpeg";
import PierogiImage from "./assets/pierogi.jpeg";
import ZapiekankaImage from "./assets/zapiekanka.jpeg";
import WorldCupTrophyImage from "./assets/football_trophy.jpeg";



export function proccessQuizResults(userAnswers) {

    const correctAnswersCount = userAnswers.reduce((acc, userAnswer) => {
        return acc + (userAnswer ? 1 : 0);
    }, 0);
    const totalQuestions = userAnswers.length;
    const percentageScore = Math.round((correctAnswersCount / totalQuestions) * 100);

    if (percentageScore >= 90) {
        return {
            percentage: percentageScore,
            classification: "Meblościanka",
            notes: "You have been classified as 'Meblościanka'. It doesen't get much more Polish than this!",
            image: MeblościankaIage
        }
    }
    else if (percentageScore >= 70) {
        return {
            percentage: percentageScore,
            classification: "Pierogi",
            notes: "You have been classified as 'Pierogi'. Keep up the good work!",
            image: PierogiImage
        }
    }
    else if (percentageScore >= 50) {
        return {
            percentage: percentageScore,
            classification: "Zapkiekanka",
            notes: "Just like Zapiekanka, you are a bit of a mix. But you are still Polish!",
            image: ZapiekankaImage
        }
    }
    else {
        return {
            percentage: percentageScore,
            classification: "World Cup trophy",
            notes: "Just like World Cup trophy, you are far from being Polish.",
            image: WorldCupTrophyImage
        }
    }
}