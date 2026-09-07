import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="bg-blue-400 p-3">
      <div className="flex items-center justify-around">
        <div className="bg-blue-300 p-2 rounded">
          <Link to="/">MyApp</Link>
        </div>
        <div className="flex items-center gap-5">
          <NavLink to="/" className="bg-blue-300 p-2 rounded">
            Home
          </NavLink>
          <NavLink to="/about" className="bg-blue-300 p-2 rounded">
            About
          </NavLink>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <div className="flex  gap-3">
                <NavLink to="/dashboard" className="bg-blue-300 p-2 rounded">
                  Dashbord
                </NavLink>
                <button onClick={logout} className="bg-red-400 p-2 rounded">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className="bg-blue-300 p-2 rounded">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
