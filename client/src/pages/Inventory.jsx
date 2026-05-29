import { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import API from "../services/api";
import { Link } from "react-router-dom";

function Inventory() {
  const [items, setItems] =
    useState([]);

  // Fetch grocery items
  const fetchItems =
    async () => {
      try {
        const response =
          await API.get(
            "/grocery/all"
          );

        setItems(
          response.data
        );
      } catch (error) {
        console.error(
          error
        );
      }
    };

  // Delete item
  const handleDelete =
    async (id) => {
      try {
        const response =
          await API.delete(
            `/grocery/delete/${id}`
          );

        alert(
          response.data
            .message
        );

        fetchItems();
      } catch (
        error
      ) {
        console.error(
          error
        );

        alert(
          "Delete failed"
        );
      }
    };

  // Edit item
  const handleEdit =
    async (item) => {
      const newQuantity =
        prompt(
          `Update quantity for ${item.name}`,
          item.quantity
        );

      if (
        !newQuantity
      )
        return;

      try {
        const response =
          await API.put(
            `/grocery/update/${item._id}`,
            {
              quantity:
                Number(
                  newQuantity
                ),
            }
          );

        alert(
          response.data
            .message
        );

        fetchItems();
      } catch (
        error
      ) {
        console.error(
          error
        );

        alert(
          "Update failed"
        );
      }
    };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Back Button */}
      <Link to="/dashboard">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl mb-6 transition shadow-md">
          ← Back to Dashboard
        </button>
      </Link>

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold text-gray-800">
          Inventory
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Manage grocery items
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {items.map(
          (item) => (
            <div
              key={
                item._id
              }
              className="bg-white rounded-[35px] shadow-md p-8 hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-6">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                  alt="grocery"
                  className="w-32 h-32 object-contain"
                />

              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                {
                  item.name
                }
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                Quantity:
                {" "}
                {
                  item.quantity
                }{" "}
                {
                  item.unit
                }
              </p>

              <p className="text-gray-500 text-lg">
                Category:
                {" "}
                {
                  item.category
                }
              </p>

              <p className="text-gray-500 text-lg">
                Minimum
                Stock:
                {" "}
                {
                  item.minimumStock
                }
              </p>

              <div className="flex gap-4 mt-8">

                {/* Edit */}
                <button
                  onClick={() =>
                    handleEdit(
                      item
                    )
                  }
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl flex justify-center items-center gap-2 transition"
                >
                  <FaEdit />
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() =>
                    handleDelete(
                      item._id
                    )
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl flex justify-center items-center gap-2 transition"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Inventory;

