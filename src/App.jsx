import { Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext";

import "./App.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import DashboardItems from "./pages/DashboardItems";
import StoreLayout from "./components/layout/StoreLayout";
import Shop from "./pages/Shop";
import { CategoriesProvider } from "./context/CategoriesContext";
import DetailItem from "./pages/DetailItem";
import Kart from "./pages/Kart";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <Routes>
            {/*Public Routes*/}
            <Route path="/" element={<StoreLayout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route path="product/:id" element={<DetailItem />} />
              <Route path="kart" element={<Kart />} />
            </Route>
            {/*Login Routes*/}
            <Route path="/login" element={<Login />} />

            {/*Protected Dashboard Routes*/}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="items" element={<DashboardItems />} />
            </Route>

            {/*Catch all Routes*/}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProductsProvider>
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
