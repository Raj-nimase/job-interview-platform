import React, { useState } from "react";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react"; // For password toggle icons

const Login = () => {
  const [flipped, setFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e, isSignup) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: isSignup ? "Registered Successfully!" : "Logged in Successfully!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('public/photo/login.jpg')",
      }}
    >
      {/* <Lottie animationData={YOUR_ANIMATION_JSON} loop autoPlay className="absolute w-full h-full z-0" /> */}

      <div className="z-10 perspective-[1000px]">
        <div
          className={`relative w-[400px] h-[550px] transition-transform duration-700 transform-style-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Sign Up Card */}
          <div className="absolute w-full h-full rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/30 p-8 backface-hidden">
            <h2 className="text-3xl font-bold text-center text-white mb-2">
              Create Account
            </h2>
            <p className="text-sm text-white/80 text-center mb-4">
              Sign up with your details to get started!
            </p>
            <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/40 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/40 text-white focus:outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 pr-10 rounded bg-white/10 border border-white/40 text-white focus:outline-none"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-white/70"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
              <div className="flex items-center text-white gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="text-sm">Remember me</span>
              </div>
              <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
                  Sign Up
            </button>

            </form>
            <div
              onClick={() => setFlipped(true)}
              className="mt-4 text-white text-center cursor-pointer hover:text-blue-400 transition"
            >
              Already have an account? Login
            </div>
          </div>

          {/* Login Card */}
          <div className="absolute w-full h-full rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/30 p-8 rotate-y-180 backface-hidden">
            <h2 className="text-3xl font-bold text-center text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-sm text-white/80 text-center mb-4">
              Login using your credentials
            </p>
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/40 text-white focus:outline-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 pr-10 rounded bg-white/10 border border-white/40 text-white focus:outline-none"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-white/70"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
              <div className="flex items-center text-white gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="text-sm">Remember me</span>
              </div>
              <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
                Login
              </button>

            </form>
            <div
              onClick={() => setFlipped(false)}
              className="mt-4 text-white text-center cursor-pointer hover:text-blue-400 transition"
            >
              Don’t have an account? Sign Up
            </div>
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
