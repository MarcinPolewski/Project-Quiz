import classes from "./App.module.css";

import { useState } from "react";
import StartScreen from './components/StartScreen/StartScreen';
import QuizzScreen from './components/QuizzScreen/QuizzScreen';

function App() {

  const [appState, setAppState] = useState("start");

  const content = getCurrentScreenContent();

  return (
    <div className={classes.app}>
      {content}
    </div>
  )

  // ===============================================

  function getCurrentScreenContent() {
    if (appState === "start") {
      return <StartScreen onStart={handleStart} />;
    }
    else if (appState === "quiz") {
      return <QuizzScreen onEnd={handleQuizEnd} />;
    }
  }

  function handleStart() {
    setAppState("quiz");
  }

  function handleQuizEnd() {
    console.log();
  }
}

export default App
