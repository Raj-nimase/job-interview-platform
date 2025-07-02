import React, { useState } from "react";

const Login = () => {
  const [flipped, setFlipped] = useState(false);

  const handleSubmit = (e, isSignup) => {
    e.preventDefault();
    alert(isSignup ? "Registered Successfully!" : "Logged in Successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div
        className={`relative w-[400px] h-[500px] transition-transform duration-700 transform-style-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Sign Up Card */}
        <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg backface-hidden p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create Account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Sign up with your details to get started!
          </p>
          <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>
          <div
            className="mt-4 text-center text-indigo-600 cursor-pointer"
            onClick={() => setFlipped(true)}
          >
            Already have an account? Login
          </div>
        </div>

        {/* Login Card */}
        <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-8 rotate-y-180 backface-hidden">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Login using your credentials
          </p>
          <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
          </form>
          <div
            className="mt-4 text-center text-indigo-600 cursor-pointer"
            onClick={() => setFlipped(false)}
          >
            Don't have an account? Sign Up
          </div>
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Login;
