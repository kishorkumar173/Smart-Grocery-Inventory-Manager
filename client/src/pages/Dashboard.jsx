
import { useEffect, useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaBell,
  FaSearch,
  FaPlus,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

function Dashboard() {
  const [items, setItems] =
    useState([]);

  const [lowStockCount,
    setLowStockCount] =
    useState(0);

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const navigate =
    useNavigate();

  // Logout
  const handleLogout =
    () => {
      localStorage.removeItem(
        "token"
      );

      navigate("/login");
    };

  // Fetch Dashboard Data
  const fetchDashboardData =
    async () => {
      try {
        const groceryResponse =
          await API.get(
            "/grocery/all"
          );

        const lowStockResponse =
          await API.get(
            "/grocery/low-stock"
          );

        setItems(
          groceryResponse.data
        );

        setLowStockCount(
          lowStockResponse.data
            .length
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="w-[280px] bg-slate-900 text-white p-8 min-h-screen shadow-2xl flex flex-col justify-between">

        <div>
          <h1 className="text-4xl font-bold mb-12 text-green-400">
            Grocery AI
          </h1>

          <div className="space-y-5">

            <Link to="/dashboard">
              <button className="flex items-center gap-4 bg-green-500 hover:bg-green-600 px-6 py-5 rounded-3xl w-full text-lg transition font-semibold">
                <FaHome />
                Dashboard
              </button>
            </Link>

            <Link to="/inventory">
              <button className="flex items-center gap-4 hover:bg-slate-800 px-6 py-5 rounded-3xl w-full text-lg transition">
                <FaBoxOpen />
                Inventory
              </button>
            </Link>

            <Link to="/shopping-list">
              <button className="flex items-center gap-4 hover:bg-slate-800 px-6 py-5 rounded-3xl w-full text-lg transition">
                <FaShoppingCart />
                Shopping List
              </button>
            </Link>

            <Link to="/low-stock">
              <button className="flex items-center gap-4 hover:bg-slate-800 px-6 py-5 rounded-3xl w-full text-lg transition">
                <FaBell />
                Low Stock
              </button>
            </Link>

            <Link to="/expiry-alerts">
              <button className="flex items-center gap-4 hover:bg-slate-800 px-6 py-5 rounded-3xl w-full text-lg transition">
                ⏰ Expiry Alerts
              </button>
            </Link>

            <Link to="/analytics">
              <button className="flex items-center gap-4 hover:bg-slate-800 px-6 py-5 rounded-3xl w-full text-lg transition">
                <FaChartLine />
                Analytics
              </button>
            </Link>

          </div>
        </div>

        {/* Logout */}
        <button
          onClick={
            handleLogout
          }
          className="bg-red-500 hover:bg-red-600 px-6 py-5 rounded-3xl flex items-center justify-center gap-3 text-lg transition shadow-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">

        {/* Navbar */}
        <div className="bg-white rounded-[35px] shadow-lg px-10 py-8 flex justify-between items-center mb-10">

          <div>
            <h2 className="text-5xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Smart Grocery Inventory
              Management
            </p>
          </div>

          {/* Search */}
          <div className="bg-slate-100 px-6 py-4 rounded-3xl flex items-center w-[400px] shadow-sm">

            <FaSearch className="text-gray-500 text-xl" />

            <input
              type="text"
              placeholder="Search groceries..."
              value={
                searchTerm
              }
              onChange={(e) =>
                setSearchTerm(
                  e.target
                    .value
                )
              }
              className="bg-transparent outline-none ml-4 w-full text-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-[35px] shadow-lg hover:scale-105 transition">
            <p className="text-xl">
              Total Items
            </p>

            <h1 className="text-6xl font-bold mt-4">
              {items.length}
            </h1>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-8 rounded-[35px] shadow-lg hover:scale-105 transition">
            <p className="text-xl">
              Low Stock
            </p>

            <h1 className="text-6xl font-bold mt-4">
              {
                lowStockCount
              }
            </h1>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-red-600 text-white p-8 rounded-[35px] shadow-lg hover:scale-105 transition">
            <p className="text-xl">
              Alerts
            </p>

            <h1 className="text-6xl font-bold mt-4">
              {
                lowStockCount
              }
            </h1>
          </div>

          <Link to="/analytics">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-[35px] shadow-lg hover:scale-105 transition cursor-pointer">
              <p className="text-xl">
                Analytics
              </p>

              <FaChartLine className="text-5xl mt-5" />
            </div>
          </Link>
        </div>

        {/* Warning */}
        {lowStockCount >
          0 && (
          <div className="bg-yellow-100 border-l-[12px] border-yellow-500 p-8 rounded-[35px] mb-10 shadow-md">

            <h2 className="text-3xl font-bold text-yellow-800">
              ⚠️ Low Stock
              Warning
            </h2>

            <p className="text-lg text-yellow-700 mt-3">
              You have{" "}
              {
                lowStockCount
              }{" "}
              grocery items
              running low.
            </p>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold text-gray-800">
            Grocery
            Inventory
          </h2>

          <Link to="/add-item">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-3xl flex items-center gap-3 text-lg transition shadow-md">
              <FaPlus />
              Add Grocery
            </button>
          </Link>
        </div>

        {/* Inventory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {items
            .filter(
              (item) =>
                item.name
                  .toLowerCase()
                  .includes(
                    searchTerm.toLowerCase()
                  )
            )
            .map(
              (item) => (
                <div
                  key={
                    item._id
                  }
                  className="bg-white rounded-[35px] shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <h2 className="text-3xl font-bold text-gray-800">
                    {
                      item.name
                    }
                  </h2>

                  <p className="text-gray-500 mt-4 text-lg">
                    {
                      item.quantity
                    }{" "}
                    {
                      item.unit
                    }
                  </p>

                  <p className="text-gray-500 text-lg">
                    {
                      item.category
                    }
                  </p>

                  <span
                    className={`inline-block mt-5 px-5 py-3 rounded-full text-white font-semibold ${
                      item.quantity <=
                      item.minimumStock
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {item.quantity <=
                    item.minimumStock
                      ? "Low Stock"
                      : "In Stock"}
                  </span>
                </div>
              )
            )}
        </div>
<div className="text-center mt-16 text-gray-500 text-sm">
  © 2026 Smart Grocery AI | Made with ❤️ by{" "}
  <span className="text-green-600 font-semibold">
    Kishor Kumar L
  </span>
</div>
      </div>
    </div>
  );
}

export default Dashboard;

