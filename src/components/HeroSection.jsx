"use client";

import { useState } from "react";
import { supabase } from "../auth/config";
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!email.trim() || !password.trim()) {
      alert("Email and password are required.");
      return;
    }

    if (!isLogin && !name.trim()) {
      alert("Name is required for signup.");
      return;
    }

    try {
      setLoading(true);

      if (isLogin) {
        // LOGIN
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          alert(error.message);
          return;
        }

        navigate("/userdashboard");
      } else {
        // SIGNUP
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role,
            },
          },
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert("Signup successful! Please verify your email.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="relative bg-linear-to-br from-green-50 to-green-100 p-10 flex flex-col justify-center">
          <div className="absolute top-5 left-5">
            <img src={logo} alt="logo" className="w-28" />
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Campus Portal</h2>
            <p className="mt-3 text-gray-600">
              Manage reports, complaints <br /> & events in one place.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-r from-green-200 to-green-400 rounded-t-full opacity-40"></div>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h3>

          <form onSubmit={handleAuth} className="space-y-4">
            {/* Name (Signup only) */}
            {!isLogin && (
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Role Toggle (Signup only) */}
            {!isLogin && (
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    role === "student"
                      ? "bg-white shadow text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    role === "admin"
                      ? "bg-white shadow text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  Admin
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
            >
              {loading ? "Please wait..." : isLogin ? "Log In" : "Sign Up"}
            </button>

            {/* Switch Mode */}
            <p className="text-sm text-center text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-green-600 font-medium"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
