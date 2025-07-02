import { useNavigate } from "react-router-dom";

const features = [
  {
    name: "Take Quiz",
    description: "Sharpen your skills with topic-wise MCQs.",
    link: "/quiz",
    emoji: "🧠",
  },
  {
    name: "Resume Builder",
    description: "Create a professional resume in minutes.",
    link: "/resume",
    emoji: "📄",
  },
  {
    name: "Interview Tips",
    description: "Read best practices and HR round tricks.",
    link: "/tips",
    emoji: "💼",
  },
  {
    name: "Progress",
    description: "Track your quiz scores and attempts.",
    link: "/progress",
    emoji: "📊",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard 🎯</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.name}
            onClick={() => navigate(feature.link)}
            className="cursor-pointer bg-white shadow-md hover:shadow-lg transition p-6 rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-1">{feature.emoji} {feature.name}</h2>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
