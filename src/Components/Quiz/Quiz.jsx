import React, { useState } from "react";

export default function Quiz({ question, onNext, time }) {
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  function selectedOption(index) {
    if (isAnswered) return;

    setSelected(index);
    setIsAnswered(true);
  }

  const isCorrect = selected === question.answer;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className={`bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full border-2 h-[450px] ${
          isAnswered
            ? isCorrect
              ? "border-green-500"
              : "border-red-500"
            : "border-transparent"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="mb-6 font-medium">{question.title}</h2>
          <span className="text-base font-bold text-blue-600">
            <span className="mr-1">
              <i className="ri-time-line"></i>
            </span>
            {time} сек
          </span>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => {
            let optionClasses =
              "w-full p-4 rounded-lg cursor-pointer transition shadow-md bg-gray-100";

            if (isAnswered) {
              if (index === question.answer) {
                optionClasses += "border-green-500 bg-green-50";
              } else if (index === selected) {
                optionClasses += "border-red-500 bg-red-50";
              } else {
                optionClasses += "opacity-50";
              }
            } else {
              optionClasses += "hover:bg-blue-100";
            }
            return (
              <button
                key={index}
                className={optionClasses}
                onClick={() => selectedOption(index)}
              >
                {option}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className="mt-6 text-right">
            <button
              onClick={() => {
                setIsAnswered(false);
                setSelected(null);
                onNext();
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer"
            >
              Дальше
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
