import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getProduct() {
    try {
      const response = await api.get("/items");
      if (response.success) {
        setItems(response.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Errore to response products:", error);
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  function formatPrice(price) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  }

  const value = {
    items,
    loading,
    error,
    formatPrice,
    getProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductsProvider");
  }
  return context;
}
