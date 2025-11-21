import React from "react";

export default function FinishScreen({ questions, answers, timeSpent }) {
  const correctCount = answers.filter(
    (a, i) => a === questions[i].answer
  ).length;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-[700px] w-full">
        <h1 className="text-2xl font-bold mb-4">Тест завершён!</h1>
        <p className="text-lg mb-2">
          Время прохождения: <span className="font-semibold">{timeSpent} секунд</span>
        </p>
        <p className="text-lg mb-6">
          Правильных ответов:{" "}
          <span className="font-semibold">
            {correctCount} / {questions.length}
          </span>
        </p>
        <h2 className="text-xl font-bold mb-2">Ваши ответы:</h2>
        <ul className="space-y-3">
          {questions.map((question, index) => {
            const isCorrect = answers[index] === question.answer;
            return (
              <li
                className={`p-3 rounded-lg ${
                  isCorrect ? "bg-green-100" : "bg-red-100"
                }`}
                key={index}
              >
                <p className="font-semibold">{question.title}</p>
                <p>
                  Вы выбрали: {question.options[answers[index]] || "Не выбрано"}
                </p>
                {!isCorrect && (
                  <p>Правильный ответ: {question.options[question.answer]}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
