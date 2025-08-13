import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const COLORS = ["#28a745", "#dc3545"];


const questions = [
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
    explanation: "Binary search divides the array in half each time, giving it a time complexity of O(log n)."
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort",
    explanation: "Merge sort consistently performs at O(n log n) in the average case."
  }
];

const QuizPlay = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(60);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    let interval = null;
    if (!showExplanation) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleNext();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentQuestionIndex, showExplanation]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
    if (option === currentQuestion.answer) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setTimer(60);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const data = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: questions.length - correctAnswers }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4">
      <div className="bg-slate-700 rounded-2xl shadow-xl p-8 w-full max-w-2xl transition-all duration-500">
        {!showResult ? (
          <>
            <div className="flex justify-between mb-4 text-sm text-gray-300">
              <span>Topic: {topic}</span>
              <span>Time left: {timer}s</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold mb-4">
                  {currentQuestionIndex + 1}. {currentQuestion.question}
                </h2>
                <div className="space-y-2">
                  {currentQuestion.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt)}
                      disabled={selectedOption}
                      className={`block w-full text-left px-4 py-2 rounded-xl border transition duration-300 ${selectedOption === opt
                        ? opt === currentQuestion.answer
                          ? "bg-green-600 border-green-400"
                          : "bg-red-600 border-red-400"
                        : "bg-slate-600 hover:bg-slate-500"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <motion.div
                    className="mt-4 p-4 rounded-xl bg-slate-800 border border-slate-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="font-semibold text-green-400">Correct Answer: {currentQuestion.answer}</p>
                    <p className="text-sm mt-2 text-gray-300">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}

                {showExplanation && (
                  <motion.button
                    onClick={handleNext}
                    className="mt-6 bg-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-500 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Next
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Quiz Result</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                  isAnimationActive={true}
                  animationDuration={800}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-center"
            >
              <button
                onClick={() => navigate("/quiz/course")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg"
              >
                Go to Exam Page
              </button>
            </motion.div>


            <p className="mt-4 text-lg">
              You answered {correctAnswers} out of {questions.length} correctly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPlay;
