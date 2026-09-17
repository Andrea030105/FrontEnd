import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useKart } from "../../context/KartContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { kartCount } = useKart();
  const [isOpen, setIsOpen] = useState(false);

  const labelsNavbar = [
    { label: "Home", route: "/" },
    { label: "Shop", route: "/shop" },
    { label: "About", route: "/about" },
  ];

  return (
    <nav className="w-full container mx-auto bg-surface rounded-2xl flex items-center justify-between px-4 sm:px-5 h-16 sm:h-20 relative">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img
          src="../../../public/logo/logo.png"
          alt="logo"
          className="w-28 sm:w-40"
        />
      </Link>

      {/* Links centrali: nascosti su mobile, visibili da md */}
      <div className="hidden md:flex items-center gap-5 h-full">
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

      {/* Azioni a destra: compatte su mobile, complete da sm/md */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 sm:min-w-40 justify-end">
        {isAuthenticated ? (
          <div className="hidden sm:flex items-center gap-3">
            <NavLink to="/dashboard" className="text-cyan-accent font-semibold">
              Dashboard
            </NavLink>
            <button
              onClick={logout}
              className="text-red-500 p-2 rounded cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-3">
            <NavLink
              to="/login"
              className="flex items-center gap-2 bg-transparent border border-border rounded-2xl px-3 py-2 text-text-muted whitespace-nowrap"
            >
              <User className="text-cyan-accent" size={18} /> Login
            </NavLink>
            <NavLink
              to="/kart"
              className="relative flex items-center gap-2 bg-transparent border border-border rounded-2xl px-3 py-2 text-text-muted whitespace-nowrap"
            >
              <ShoppingCart className="text-cyan-accent" size={18} /> Cart
              {kartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-blue px-1 text-xs text-white">
                  {kartCount}
                </span>
              )}
            </NavLink>
          </div>
        )}

        {/* Icona carrello sempre visibile su mobile, anche se autenticato */}
        <NavLink to="/kart" className="relative sm:hidden p-2">
          <ShoppingCart className="text-cyan-accent" size={22} />
          {kartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary-blue px-1 text-[10px] text-white">
              {kartCount}
            </span>
          )}
        </NavLink>

        {/* Hamburger: solo su mobile */}
        <button
          className="md:hidden p-2 text-text-muted"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile a comparsa */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface rounded-2xl flex flex-col gap-4 p-5 md:hidden z-50">
          {labelsNavbar.map((label) => (
            <NavLink
              key={label.label}
              to={label.route}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-semibold ${isActive ? "text-cyan-accent" : "text-text-muted"}`
              }
            >
              {label.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="text-cyan-accent font-semibold"
              >
                Dashboard
              </NavLink>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-red-500 text-left cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 border border-border rounded-2xl px-4 py-2 text-text-muted"
            >
              <User className="text-cyan-accent" size={18} /> Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
export default Navbar;
