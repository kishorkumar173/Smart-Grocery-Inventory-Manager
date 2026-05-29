
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import ShoppingList from "./pages/ShoppingList";
import LowStock from "./pages/LowStock";
import ExpiryAlerts from "./pages/ExpiryAlerts";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/inventory"
          element={<Inventory />}
        />

        <Route
          path="/add-item"
          element={<AddItem />}
        />

        <Route
          path="/shopping-list"
          element={<ShoppingList />}
        />

        <Route
          path="/low-stock"
          element={<LowStock />}
        />

        <Route
          path="/expiry-alerts"
          element={<ExpiryAlerts />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

