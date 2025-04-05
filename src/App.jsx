import './App.css'
import { useState } from "react";
import StartScreen from './components/StartScreen/StartScreen';
import ResultScreen from './components/ResultScreen/ResultScreen';
import QuizzScreen from './components/QuizzScreen/QuizzScreen';

function App() {

  const [appState, setAppState] = useState("start");

  const content = getCurrentScreenContent();

  return (
    <>
      {content}
    </>
  )

  // ===============================================

  function getCurrentScreenContent() {
    if (appState === "start") {
      return <StartScreen onStart={handleStart} />;
    }
    else if (appState === "quiz") {
      return <QuizzScreen />;
    }
    else if (appState === "result") {
      return <ResultScreen />;
    }
  }

  function handleStart() {
    setAppState("quiz");
  }
}

export default App
