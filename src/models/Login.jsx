import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authentication/authSlice";
import authService from "../appwrite/auth";
import Button from "../layouts/Button";
import Input from "../layouts/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

//pass closeform method
export default function Login({ closeForm , openSignupForm}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const loginHandler = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        window.location.reload();
        navigate("/dashboard");
        closeForm();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit(loginHandler)}
        >
          <h2 className="text-4xl font-semibold text-center text-backgroundColor">
            Login
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              onClick={openSignupForm}
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
            {/* change route when finishing the project */}
          </p>
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
          label="Password: "
          type="password"
          placeholder="Enter your password"
          {...register("password",{
            required:true,
          })}
          />
          <div className="flex flex-row  justify-center gap-2 ">
            <Button title="Login" type="submit" />
            <button
              type="button"
              className="bg-backgroundColor text-white px-8 rounded-md active:bg-red-500"
              onClick={closeForm}
              id="close"
            >
              Close
            </button>
          </div>
        </form>
        {error && (
          <p className="mt-2 text-red-600 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
}
