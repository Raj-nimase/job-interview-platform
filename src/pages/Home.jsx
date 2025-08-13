// Fully Enhanced Home.jsx for Interview Platform
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* 🌟 Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-700 to-blue-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Ace Your Job Interview
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-6"
        >
          Prepare with quizzes, mock interviews, and resume tools.
        </motion.p>
        <motion.a
          href="/login"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-blue-700 font-bold py-2 px-8 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
        >
          🚀 Get Started
        </motion.a>
      </section>

      {/* 🎠 Carousel Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Key Highlights</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">📄 Resume Builder</h3>
              <p>Create a polished, professional resume in minutes.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">🧠 Quiz Practice</h3>
              <p>Master key topics with timed, topic-wise quizzes.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">🎤 Mock Interviews</h3>
              <p>Simulate real interview scenarios to boost confidence.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ✅ Features Grid */}
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

      {/* 💬 Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p>“This platform helped me land my first job! The resume tool is top-notch.”</p>
            <p className="font-bold mt-4">— Ananya P.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p>“Quizzes and mock interviews built my confidence for my placement round.”</p>
            <p className="font-bold mt-4">— Rohit S.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p>“Simple UI and very effective resources. Great job team!”</p>
            <p className="font-bold mt-4">— Priya M.</p>
          </div>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="text-center bg-blue-100 text-blue-700 py-6 mt-10">
        <p>© {new Date().getFullYear()} InterviewPrep. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
