import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ShoppingCart, User } from "lucide-react";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

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
    <nav className="h-20 w-full container mx-auto bg-white rounded-2xl flex items-center justify-between px-5">
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
                isActive ? "text-[#38BDF8]" : "text-[#5B6577]"
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
              <NavLink to="/dashboard" className="text-[#38BDF8] font-semibold">
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
              className="flex gap-3 bg-transparent border border-[#E3E7EE] rounded-2xl px-4 py-2 text-[#5B6577]"
            >
              <User className="text-[#38BDF8]" /> Login
            </NavLink>
            <NavLink
              to="/"
              className="flex ms-3 gap-3 bg-transparent border border-[#E3E7EE] rounded-2xl px-4 py-2 text-[#5B6577]"
            >
              <ShoppingCart className="text-[#38BDF8]" /> Cart
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
