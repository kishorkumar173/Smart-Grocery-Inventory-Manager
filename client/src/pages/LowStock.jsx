import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
function LowStock() {
  const [items, setItems] = useState([]);

  const fetchLowStockItems =
    async () => {
      try {
        const response =
          await API.get(
            "/grocery/low-stock"
          );

        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchLowStockItems();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-10">

  <Link to="/dashboard">
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl mb-6 transition shadow-md">
      ← Back to Dashboard
    </button>
  </Link>

  <h1 className="text-5xl font-bold">
    Low Stock Alerts ⚠️
  </h1>

      <p className="text-gray-500 text-lg mb-10">
        Items running out soon
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {items.length === 0 ? (
          <div className="bg-green-100 text-green-700 p-8 rounded-3xl text-2xl font-semibold">
            ✅ All grocery items are in stock
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-8 rounded-[35px] shadow-md border-l-[10px] border-yellow-500"
            >
              <h2 className="text-3xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Current Quantity:
                {" "}
                {item.quantity}
              </p>

              <p className="text-gray-500 text-lg">
                Minimum Required:
                {" "}
                {item.minimumStock}
              </p>

              <button className="mt-6 bg-yellow-500 text-white px-6 py-4 rounded-2xl">
                Restock Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LowStock;