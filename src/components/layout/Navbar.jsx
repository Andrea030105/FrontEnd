import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ShoppingCart, User } from "lucide-react";
import { useKart } from "../../context/KartContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { kartCount } = useKart();

  const labelsNavbar = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Shop",
      route: "/shop",
    },
    {
      label: "About",
      route: "/about",
    },
  ];

  return (
    <nav className="h-20 w-full container mx-auto bg-surface rounded-2xl flex items-center justify-between px-5">
      <Link to="/">
        <img src="../../../public/logo/logo.png" alt="logo" className="w-40" />
      </Link>

      <div className="flex items-center gap-5 h-full">
        {labelsNavbar.map((label) => (
          <NavLink
            key={label.label}
            to={label.route}
            className={({ isActive }) =>
              `relative font-semibold transition-colors ${
                isActive ? "text-cyan-accent" : "text-text-muted"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{label.label}</span>
                {isActive && (
                  <div className="absolute rounded-2xl -bottom-7 left-0 h-1 w-full bg-linear-to-r from-cyan-500 to-blue-500"></div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="min-w-40 flex justify-end">
        {isAuthenticated ? (
          <>
            <div className="flex items-center  gap-3">
              <NavLink
                to="/dashboard"
                className="text-cyan-accent font-semibold"
              >
                Dashbord
              </NavLink>
              <button
                onClick={logout}
                className="text-red-500 p-2 rounded cursor-pointer"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="flex gap-3 bg-transparent border border-border rounded-2xl px-4 py-2 text-text-muted"
            >
              <User className="text-cyan-accent" /> Login
            </NavLink>
            <NavLink
              to="/kart"
              className="relative flex ms-3 gap-3 bg-transparent border border-border rounded-2xl px-4 py-2 text-text-muted"
            >
              <ShoppingCart className="text-cyan-accent" /> Cart
              {kartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-blue px-1 text-xs text-white">
                  {kartCount}
                </span>
              )}
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
