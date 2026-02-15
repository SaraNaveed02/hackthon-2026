import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../auth/config";

const Signin = () => {
  const navigate = useNavigate(); // <-- use this

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) return alert("Fill all fields");

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else {
      // Redirect based on role (example)
      if (data.user?.user_metadata?.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
};

export default Signin;
