import { KartProvider } from "../../context/KartContext";
import MainLayout from "./MainLayout";

export default function StoreLayout() {
  return (
    <KartProvider>
      <MainLayout />
    </KartProvider>
  );
}
