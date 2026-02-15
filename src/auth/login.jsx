import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./config";

const Signin = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignin = async (e) => {

    e.preventDefault();

    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Invalid email or password.");
        return;
      }

      const role = data.user?.user_metadata?.role;

      if (role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/userdashboard");
      }

    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignin} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};

export default Signin;
