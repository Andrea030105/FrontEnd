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
    <div className="w-screen h-screen flex justify-center items-center bg-border">
      <div className="bg-surface w-100 p-5 rounded-2xl border-2 border-primary-blue  text-center">
        <h1 className="font-bold text-4xl text-navy-profondo">Login</h1>
        <h3 className="my-2 text-text-soft">
          Username: admin Password: qwerty
        </h3>
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
            className="bg-border rounded w-70 text-navy-profondo p-2"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-border rounded w-70 text-navy-profondo p-2"
          />
          <Button type="submit" loading={loading} className="w-full">
            Login
          </Button>
          <Button as="link" variant="outlineBlu" to="/" className="w-full">
            Home
          </Button>
        </form>
      </div>
    </div>
  );
}
