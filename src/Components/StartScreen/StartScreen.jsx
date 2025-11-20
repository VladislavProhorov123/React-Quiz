import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-[800px] p-8 flex items-center justify-center flex-col">
        <div className="bg-blue-100 text-blue-500 rounded-full w-[70px] h-[70px] flex mb-5 items-center justify-center text-2xl">
          <i className="ri-book-open-line"></i>
        </div>
        <h1 className="font-bold text-2xl mb-2">React Knowledge Quiz</h1>
        <p className="text-center text-gray-600 mb-4">
          Test your knowledge of React, JavaScript, and web development. Answer
          multiple choicequestions and see how well you know the fundamentals!
        </p>
        <div className="flex gap-16 mb-3">
          <div className="w-[170px] bg-blue-100  flex items-center flex-col p-4 rounded-lg cursor-pointer">
            <p className="text-blue-700 text-2xl mb-1">
              <i className="ri-book-open-line"></i>
            </p>
            <p className="text-xl font-bold text-blue-900">8</p>
            <p className="font-bold text-base">Questions</p>
          </div>
          <div className="w-[170px] bg-purple-300 flex items-center flex-col p-4 rounded-lg cursor-pointer">
            <p className="text-purple-900 text-2xl mb-1">
              <i class="ri-time-line"></i>
            </p>
            <p className="text-purple-950 text-xl font-bold">2:00</p>
            <p className="font-bold text-base">Minutes</p>
          </div>
          <div className="w-[170px] bg-green-200 flex items-center flex-col p-4 rounded-lg cursor-pointer">
            <p className="text-green-800 text-2xl mb-1">
              <i class="ri-trophy-line"></i>
            </p>
            <p className="text-green-800 text-xl font-bold">100%</p>
            <p className="font-bold text-base">Max Scope</p>
          </div>
        </div>
        <h2
          className="text-xl font-bold mb-4
        "
        >
          Quiz Rules
        </h2>
        <div className="bg-gray-100 w-[600px] rounded-lg p-4 space-y-4 mb-6">
          <div className="flex items-center">
            <div className="mr-2 w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xl font-bold flex items-center justify-center">
              1
            </div>
            <span className="text-gray-700 font-medium">
              Each question has multiple choice answers
            </span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xl font-bold flex items-center justify-center">
              2
            </div>
            <span className="text-gray-700 font-medium">
              You have 5 minutes to complete all questins
            </span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xl font-bold flex items-center justify-center">
              3
            </div>
            <span className="text-gray-700 font-medium">
              Once you select an answer, you'll see the explaination
            </span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xl font-bold flex items-center justify-center">
              4
            </div>
            <span className="text-gray-700 font-medium">
              You can navigate back to previous questions
            </span>
          </div>
        </div>
        <button
          onClick={onStart}
          className="bg-blue-600 rounded-sm h-[48px] w-[120px] cursor-pointer text-white font-medium "
        >
          <span className="mr-1 font-medium">
            <i class="ri-play-line"></i>
          </span>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
