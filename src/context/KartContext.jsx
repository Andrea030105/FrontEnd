import { createContext, useContext, useState } from "react";

const KartContext = createContext();

export function KartProvider({ children }) {
  const [kart, setKart] = useState([]);

  function addKart(item) {
    setKart((prevKart) => {
      const existingItem = prevKart.find((kartItem) => kartItem.id === item.id);
      if (existingItem) {
        return prevKart.map((kartItem) =>
          kartItem.id === item.id
            ? {
                ...kartItem,
                quantity: kartItem.quantity + 1,
              }
            : kartItem,
        );
      }
      return [...prevKart, { ...item, quantity: 1 }];
    });
  }

  function modifiedQuantityDown(item) {
    setKart((prevKart) => {
      const findItem = prevKart.find((kartItem) => kartItem.id === item.id);

      // Se la quantità è 1 o meno, rimuovi l’elemento
      if (!findItem || findItem.quantity <= 1) {
        return prevKart.filter((kartItem) => kartItem.id !== item.id);
      }

      // Altrimenti diminuisci la quantità di 1
      return prevKart.map((kartItem) =>
        kartItem.id === item.id
          ? { ...kartItem, quantity: kartItem.quantity - 1 }
          : kartItem,
      );
    });
  }

  function modifiedQuantityUp(item) {
    setKart((prevKart) => {
      return prevKart.map((kartItem) =>
        kartItem.id === item.id
          ? { ...kartItem, quantity: kartItem.quantity + 1 }
          : kartItem,
      );
    });
  }

  function remouveKart(item) {
    setKart((prevKart) => {
      return prevKart.filter((kartItem) => kartItem.id !== item.id);
    });
  }

  const value = {
    addKart,
    modifiedQuantityDown,
    modifiedQuantityUp,
    remouveKart,
    kart,
    kartCount: kart.length,
  };

  return <KartContext.Provider value={value}>{children}</KartContext.Provider>;
}

export function useKart() {
  const context = useContext(KartContext);
  if (!context) {
    throw new Error("useKart must be used within KartProvider");
  }
  return context;
}
