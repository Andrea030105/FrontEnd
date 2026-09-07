import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export function useAuth() {
  const contex = useContext(AuthContext);
  if (!contex) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return contex;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    if (token) {
      checkAuth();
    } else {
      setLoding(false);
    }
  }, [token]);

  const checkAuth = async () => {
    try {
      const response = await api.get("/auth/me");
      if (response.success) {
        setUser(response.user);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Auth check failed", error);
      logout();
    } finally {
      setLoding(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      if (response.success) {
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem("token", response.token);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: "login failed" };
    }
  };

  const value = {
    user,
    token,
    loding,
    login,
    logout,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
