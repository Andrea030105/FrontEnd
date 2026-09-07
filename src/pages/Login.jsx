import { useState } from "react";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmint = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(credentials);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-blue-300 w-100 p-5 rounded-2xl text-white text-center">
        <h1 className="font-bold text-4xl">Login</h1>
        <h3 className="my-2">Username: admin Password: qwerty</h3>
        <form
          onSubmit={handleSubmint}
          className="flex flex-col items-center gap-3"
        >
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            className="bg-amber-50 rounded w-70 text-black p-2"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-amber-50 rounded w-70 text-black p-2"
          />
          <Button type="submit" loading={loading} className="w-full">
            Login
          </Button>
          <NavLink
            to="/"
            className="w-full py-1.5 bg-white text-black hover:bg-gray-300  focus:ring-blue-500 inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 hover:cursor-pointer"
          >
            Home
          </NavLink>
        </form>
      </div>
    </div>
  );
}
