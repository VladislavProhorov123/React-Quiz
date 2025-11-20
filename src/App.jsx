import React, { useState } from "react";
import StartScreen from "./Components/StartScreen/StartScreen";
import { QUESTIONS } from "./Data/data";
import Quiz from "./Components/Quiz/Quiz";

export default function App() {
  const [step, setStep] = useState("start");
  const [index, setIndex] = useState(0)

  function goNext() {
    setIndex(index + 1)
  }

  return (
    <div>
      {step === "start" && (
        <StartScreen total={QUESTIONS.length} onStart={() => setStep("quiz")} />
      )}
      {step === 'quiz' && (
        <Quiz question={QUESTIONS[index]} onNext={goNext} />
      )}
    </div>
  );
}
