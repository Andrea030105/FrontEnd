import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 rounded-4xl py-8 bg-gray-200 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
