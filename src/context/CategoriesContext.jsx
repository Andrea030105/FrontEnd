import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  async function getAllCategories() {
    try {
      const response = await api.get("/categories");
      if (response.success) setCategories(response.data);
    } catch (error) {
      console.error("response failed", error);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be used within CategoriesProvider");
  }

  return context;
}
