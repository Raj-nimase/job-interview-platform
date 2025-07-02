import { useSearchParams, useNavigate } from "react-router-dom";

const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "0");

  const percentage = Math.round((score / total) * 100);

  const getFeedback = () => {
    if (percentage === 100) return "🎉 Perfect!";
    if (percentage >= 70) return "👏 Great job!";
    if (percentage >= 50) return "🙂 Not bad, keep practicing!";
    return "😅 Try again and improve!";
  };

  return (
    <div className="max-w-md mx-auto text-center py-16">
      <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
      <p className="text-lg mb-2">You scored <strong>{score}</strong> out of <strong>{total}</strong>.</p>
      <p className="text-2xl mb-6">{getFeedback()}</p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded"
          onClick={() => navigate("/quiz")}
        >
          Back to Quizzes
        </button>
        <button
          className="bg-gray-300 text-black px-6 py-2 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
