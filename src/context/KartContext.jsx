import { createContext, useContext, useState } from "react";

const KartContext = createContext();

export function KartProvider({ children }) {
  const [kart, setKart] = useState([]);

  function addKart(item) {
    setKart((prevKart) => [...prevKart, item]);
  }

  const value = { addKart, kart, kartCount: kart.length };

  return <KartContext.Provider value={value}>{children}</KartContext.Provider>;
}

export function useKart() {
  const context = useContext(KartContext);
  if (!context) {
    throw new Error("useKart must be used within KartProvider");
  }
  return context;
}
