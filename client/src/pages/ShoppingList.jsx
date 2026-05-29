import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
function ShoppingList() {
  const [shoppingItems,
    setShoppingItems] =
    useState([]);

  // Fetch low stock items
  const fetchShoppingList =
    async () => {
      try {
        const response =
          await API.get(
            "/grocery/low-stock"
          );

        setShoppingItems(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchShoppingList();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-10">

  <Link to="/dashboard">
    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl mb-6 transition shadow-md">
      ← Back to Dashboard
    </button>
  </Link>

  <h1 className="text-5xl font-bold">
    Shopping List 🛒
  </h1>

      <p className="text-gray-500 text-lg mb-10">
        Auto-generated grocery
        list
      </p>

      <div className="bg-white rounded-[35px] shadow-md p-8">

        {shoppingItems.length ===
        0 ? (
          <div className="bg-green-100 text-green-700 p-8 rounded-3xl text-2xl font-semibold">
            ✅ No items needed
          </div>
        ) : (
          shoppingItems.map(
            (item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-6"
              >
                <div>
                  <h2 className="text-3xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Current:
                    {" "}
                    {item.quantity}
                    {" "}
                    {item.unit}
                  </p>

                  <p className="text-red-500">
                    Minimum:
                    {" "}
                    {item.minimumStock}
                  </p>
                </div>

                <button className="bg-green-600 text-white px-6 py-4 rounded-2xl hover:bg-green-700 transition">
                  Purchase
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default ShoppingList;