import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="bg-border pt-10">
      <Navbar />
      <main className="container mx-auto px-4 rounded-4xl py-8 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
