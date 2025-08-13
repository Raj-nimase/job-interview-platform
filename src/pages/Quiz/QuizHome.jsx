import { useNavigate } from "react-router-dom";

const quizTopics = [
  { name: "HTML", icon: "🌐", color: "from-pink-500 to-pink-700" },
  { name: "CSS", icon: "🎨", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: "⚛️", color: "from-indigo-500 to-indigo-700" },
  { name: "DSA", icon: "📊", color: "from-green-500 to-green-700" },
  { name: "HR Round", icon: "🗣️", color: "from-purple-500 to-purple-700" },
];

const QuizHome = () => {
  const navigate = useNavigate();

  const handleStart = (topic) => {
    navigate(`/quiz/course?topic=${topic.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-16 px-6">
      <h1 className="text-cyan-300 text-4xl font-extrabold text-center mb-12 drop-shadow-lg">
        🧠 Choose a Quiz Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {quizTopics.map((topic) => (
          <div
            key={topic.name}
            onClick={() => handleStart(topic.name)}
            className={`bg-gradient-to-br ${topic.color} rounded-2xl p-8 shadow-xl transform transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] border-2 border-transparent hover:border-white group relative`}
          >
            <div className="text-white text-5xl mb-4 transition-transform duration-300 group-hover:rotate-6">
              {topic.icon}
            </div>
            <h2 className="text-white text-2xl font-semibold tracking-wide group-hover:tracking-wider transition-all duration-300">
              {topic.name}
            </h2>

            {/* Glowing border animation */}
            <div className="absolute inset-0 rounded-2xl z-[-1] opacity-30 group-hover:opacity-100 transition-all duration-500 blur-xl" style={{ backgroundImage: `linear-gradient(135deg, #fff, transparent)` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHome;
