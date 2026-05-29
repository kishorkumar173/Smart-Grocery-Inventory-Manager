import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../services/api";

function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    unit: "",
    category: "",
    expiryDate: "",
    minimumStock: "",
  });

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/grocery/add",
        formData
      );

      alert(response.data.message);

      // Reset form
      setFormData({
        name: "",
        quantity: "",
        unit: "",
        category: "",
        expiryDate: "",
        minimumStock: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add grocery item");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-[35px] shadow-xl p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold text-gray-800">
              Add Grocery Item
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Add items to inventory
            </p>
          </div>

          <Link to="/dashboard">
            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-4 rounded-2xl flex items-center gap-3">
              <FaArrowLeft />
              Back
            </button>
          </Link>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          <div>
            <label className="block mb-2 text-lg font-medium">
              Grocery Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Ex: Rice"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              Quantity
            </label>

            <input
              type="number"
              name="quantity"
              placeholder="Ex: 5"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300"
            >
              <option value="">
                Select Category
              </option>

              <option>Dairy</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Bakery</option>
              <option>Grains</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              Expiry Date
            </label>

            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              Minimum Stock
            </label>

            <input
              type="number"
              name="minimumStock"
              placeholder="Ex: 2"
              value={formData.minimumStock}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">
              Unit
            </label>

            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl border border-gray-300"
            >
              <option value="">
                Select Unit
              </option>

              <option>Kg</option>
              <option>Liters</option>
              <option>Packets</option>
              <option>Pieces</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-xl font-semibold transition">
              Add Grocery Item
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddItem;