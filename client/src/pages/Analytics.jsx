import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Analytics() {
  const [items, setItems] =
    useState([]);

  // Fetch inventory
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
        console.error(error);
      }
    };

  useEffect(() => {
    fetchItems();
  }, []);

  // Category Chart Data
  const categoryData =
    Object.values(
      items.reduce(
        (acc, item) => {
          if (
            acc[item.category]
          ) {
            acc[
              item.category
            ].value += 1;
          } else {
            acc[
              item.category
            ] = {
              name:
                item.category,
              value: 1,
            };
          }

          return acc;
        },
        {}
      )
    );

  // Quantity Chart Data
  const quantityData =
    items.map((item) => ({
      name: item.name,
      quantity:
        item.quantity,
    }));

  const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-bold text-gray-800 mb-3">
        Analytics Dashboard 📊
      </h1>

      <p className="text-gray-500 text-lg mb-10">
        Smart grocery insights
      </p>
<Link to="/dashboard">
  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-3xl mb-10 transition shadow-md">
    ← Back to Dashboard
  </button>
</Link>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Pie Chart */}
        <div className="bg-white rounded-[35px] p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">
            Grocery Categories
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <PieChart>
              <Pie
                data={
                  categoryData
                }
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {categoryData.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-[35px] p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">
            Stock Quantity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart
              data={
                quantityData
              }
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="quantity" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

        <div className="bg-green-500 text-white rounded-[35px] p-8 shadow-lg">
          <p className="text-xl">
            Total Items
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {items.length}
          </h1>
        </div>

        <div className="bg-yellow-500 text-white rounded-[35px] p-8 shadow-lg">
          <p className="text-xl">
            Categories
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {
              categoryData.length
            }
          </h1>
        </div>

        <div className="bg-blue-500 text-white rounded-[35px] p-8 shadow-lg">
          <p className="text-xl">
            Inventory Health
          </p>

          <h1 className="text-4xl font-bold mt-4">
            Good
          </h1>
        </div>

      </div>
    </div>
  );
}

export default Analytics;