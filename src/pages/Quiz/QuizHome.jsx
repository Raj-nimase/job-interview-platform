import { useNavigate } from "react-router-dom";

const quizTopics = [
  { name: "HTML", icon: "🌐", color: "bg-pink-100" },
  { name: "CSS", icon: "🎨", color: "bg-blue-100" },
  { name: "JavaScript", icon: "⚡", color: "bg-yellow-100" },
  { name: "React", icon: "⚛️", color: "bg-indigo-100" },
  { name: "DSA", icon: "📊", color: "bg-green-100" },
  { name: "HR Round", icon: "🗣️", color: "bg-purple-100" },
];

const QuizHome = () => {
  const navigate = useNavigate();

  const handleStart = (topic) => {
    navigate(`/quiz/play?topic=${topic.toLowerCase()}`);
  };

  return (
    <div className="p-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Choose a Quiz Category</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {quizTopics.map((topic) => (
          <div
            key={topic.name}
            className={`rounded-lg shadow-md p-6 text-center cursor-pointer hover:scale-105 transition-transform ${topic.color}`}
            onClick={() => handleStart(topic.name)}
          >
            <div className="text-4xl mb-2">{topic.icon}</div>
            <h2 className="text-xl font-semibold">{topic.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHome;
