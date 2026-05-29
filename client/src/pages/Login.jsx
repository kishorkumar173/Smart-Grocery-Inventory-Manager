
import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({
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
      console.log("Login clicked");

      try {
        const response =
          await API.post(
            "/auth/login",
            formData
          );

        localStorage.setItem(
          "token",
          response.data.token
        );

        alert(
          "Login Successful"
        );

        navigate(
          "/dashboard"
        );
      } catch (
        error
      ) {
        console.error(
          error
        );

        alert(
          error.response
            ?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 flex justify-center items-center px-4">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[35px] p-12 w-full max-w-2xl">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-green-400">
            Smart Grocery
          </h1>

          <p className="text-gray-300 mt-2">
            Manage your inventory smartly
          </p>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-5"
        >

          <div>
            <label className="block text-gray-200 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              className="w-full p-5 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              className="w-full p-5 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-green-400"
              required
            />
          </div>

         <button
  type="submit"
  onClick={handleSubmit}
  className="w-full bg-green-500 hover:bg-green-600 transition-all text-white py-5 rounded-xl font-semibold shadow-lg"
>
  Login
</button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an
          account?{" "}
          <Link
            to="/register"
            className="text-green-400 font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;

