import React, { useEffect, useState } from "react";
import StartScreen from "./Components/StartScreen/StartScreen";
import { QUESTIONS } from "./Data/data";
import Quiz from "./Components/Quiz/Quiz";
import FinishScreen from "./Components/FinishScreen/FinishScreen";

export default function App() {
  const [step, setStep] = useState("start");
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(120);
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    if (step !== "quiz") return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setStep("finish");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  function goNext() {
    if (index + 1 < QUESTIONS.length) {
      setIndex(index + 1);
    } else {
      setStep("finish");
    }
  }

  return (
    <div>
      {step === "start" && (
        <StartScreen
          total={QUESTIONS.length}
          onStart={() => {
            setStep("quiz");
            setIndex(0);
            setTime(120);
          }}
        />
      )}
      {step === "quiz" && <Quiz question={QUESTIONS[index]} onNext={goNext} time={time} />}

      {step === "finish" && <FinishScreen />}
    </div>
  );
}
