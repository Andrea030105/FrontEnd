import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return <h1 className="text-4xl text-white mb-6">Hello, {user?.username}</h1>;
}
