import { NavLink, Outlet } from "react-router-dom";
import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayout() {
  const { logout } = useAuth();

  const linkClasses = ({ isActive }) =>
    `block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-sky-500 text-white"
        : "text-amber-50 hover:bg-slate-800 hover:text-white"
    }`;
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="w-64 h-screen border-r border-slate-800 bg-slate-900 p-5 flex flex-col justify-between">
        <div>
          <h1 className="mb-6 text-xl font-bold text-white">Dashboard</h1>

          <nav className="space-y-2">
            <NavLink to="/dashboard" end className={linkClasses}>
              Overview
            </NavLink>

            <NavLink to="/dashboard/items" className={linkClasses}>
              Items
            </NavLink>
          </nav>
        </div>

        <Button variant="danger" className="w-full" onClick={logout}>
          Logout
        </Button>
      </aside>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
