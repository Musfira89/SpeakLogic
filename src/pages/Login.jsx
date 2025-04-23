import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../../public/Artboard 1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
    // Handle login logic here (e.g., authentication)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5e9] to-[#f2fef2] flex items-center justify-center px-6 py-6">
      <motion.div
        className="w-full max-w-lg bg-white shadow-xl rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Logo at Top */}
        <div className="bg-white py-6 px-6 flex justify-center border-b border-gray-200">
          <img src={logo} alt="Logo" className="w-48" />
        </div>

        {/* Form Body */}
        <div className="px-8 py-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome Back!
          </h2>
          <p className="text-xs text-center text-gray-500 mb-8">
            Please login to your account.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#3d960d] focus:outline-none text-sm pl-12"
              />
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#3d960d] focus:outline-none text-sm pl-12"
              />
              <FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#3d960d] text-white font-medium rounded-lg shadow-md hover:bg-[#34850b] transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[#3d960d] font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
