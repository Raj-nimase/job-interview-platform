const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Ace Your Job Interview</h1>
        <p className="text-lg mb-6">Prepare with quizzes, mock interviews, and resume tools.</p>
        <a
          href="/register"
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-200"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🧠 Quiz Practice</h3>
            <p>Topic-wise MCQs with instant feedback to sharpen your skills.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">📄 Resume Builder</h3>
            <p>Create a clean, professional resume in minutes with our guided builder.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🎤 Mock Interviews</h3>
            <p>Practice behavioral and HR questions just like the real thing.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center bg-gray-200 py-6 mt-10">
        <p>© {new Date().getFullYear()} InterviewPrep. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
