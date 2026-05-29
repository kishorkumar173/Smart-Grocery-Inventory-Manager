
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        const response =
          await API.post(
            "/auth/register",
            formData
          );

        alert(
          response.data
            .message
        );

        // Redirect to Login
        navigate(
          "/login"
        );
      } catch (
        error
      ) {
        console.error(
          error
        );

        alert(
          error
            .response
            ?.data
            ?.message ||
            "Registration failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 flex items-center justify-center p-6">

      <div className="bg-white rounded-[40px] shadow-2xl p-12 w-full max-w-2xl">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h1>

        <p className="text-center text-gray-500 text-lg mb-10">
          Join Grocery AI
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full p-5 rounded-2xl border border-gray-300 text-lg outline-none focus:border-green-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="w-full p-5 rounded-2xl border border-gray-300 text-lg outline-none focus:border-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="w-full p-5 rounded-2xl border border-gray-300 text-lg outline-none focus:border-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-xl font-semibold transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-8 text-lg text-gray-600">
          Already have an
          account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;

