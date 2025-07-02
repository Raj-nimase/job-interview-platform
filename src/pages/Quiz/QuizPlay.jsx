import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const sampleQuestions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "None of these"],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which tag is used to insert an image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      answer: "<img>",
    },
  ],
  javascript: [
    {
      question: "Which keyword is used to declare a constant?",
      options: ["var", "let", "const", "constant"],
      answer: "const",
    },
  ],
};

const QuizPlay = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "html";
  const navigate = useNavigate();

  const questions = sampleQuestions[topic.toLowerCase()] || [];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const current = questions[index];

  const handleNext = () => {
    if (selected === current.answer) setScore((prev) => prev + 1);
    setSelected("");
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate(`/quiz/result?score=${score + (selected === current.answer ? 1 : 0)}&total=${questions.length}`);
    }
  };

  useEffect(() => {
    setIndex(0);
    setScore(0);
    setSelected("");
  }, [topic]);

  if (!current) return <div className="text-center mt-20 text-xl">No questions available for this topic.</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {topic.toUpperCase()} Quiz ({index + 1}/{questions.length})
      </h2>

      <div className="bg-white shadow p-6 rounded">
        <h3 className="text-lg font-semibold mb-4">{current.question}</h3>

        <ul className="space-y-3">
          {current.options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => setSelected(opt)}
              className={`p-3 border rounded cursor-pointer ${
                selected === opt ? "bg-blue-100 border-blue-400" : "hover:bg-gray-100"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
          onClick={handleNext}
          disabled={!selected}
        >
          {index + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizPlay;
