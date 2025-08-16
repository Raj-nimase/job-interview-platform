import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; // or fetch

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
  const userId = localStorage.getItem("userId");
  const userName = JSON.parse(localStorage.getItem("user")).name;
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      console.log("dashboard");
      console.log(userName);
      try {
        const res = await axios.get(
          `http://localhost:4000/dashboard/userdata/${userId}`
        ); // Adjust route
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 font-sans">
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-10 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-cyan-500 shadow-lg flex items-center gap-6"
      >
        <img
          src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=HireReady"
          alt="Avatar"
          className="w-20 h-20 rounded-full border-2 border-cyan-400 shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-cyan-300">
            Welcome,{userName}
          </h1>
          <p className="text-gray-300 text-sm">
            Get ready to ace your interviews with smart tools.
          </p>
        </div>
      </motion.div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow animate-pulse"
              />
            ))
          : [
              {
                label: "Total Interviews",
                value: stats?.totalInterviews || 0,
                color: "text-emerald-400",
              },
              {
                label: "Total Questions",
                value: stats?.totalQuestions || 0,
                color: "text-yellow-400",
              },
              {
                label: "Avg Score/Question",
                value: stats?.averageScorePerQuestion?.toFixed(2) || 0,
                color: "text-blue-400",
              },
              {
                label: "Last Interview Score",
                value: stats?.lastInterviewScore || 0,
                color: "text-pink-400",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-100"
              >
                <h2 className={`text-xl font-bold ${stat.color}`}>
                  {stat.value}
                </h2>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <motion.div
            key={feature.name}
            onClick={() => navigate(feature.link)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-100"
          >
            <h2 className="text-xl font-bold mb-1 text-white flex items-center">
              <span className="mr-2">{feature.emoji}</span> {feature.name}
            </h2>
            <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
