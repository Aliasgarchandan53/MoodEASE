import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authentication/authSlice";
import Button from "../layouts/Button";
import Input from "../layouts/Input";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Signup({closeForm,openLoginForm}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    console.log("signup initiated")
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const data = await authService.getCurrentUser();
        console.log("user data : ",data)
        if (data) {
          dispatch(login(data));
          navigate("/dashboard");
          closeForm();
          // console.log("login successful")
        }
      }
    } catch (error) {
      console.log("signup error: ",error);
      setError(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit(create)}
        >
          <h2 className="text-4xl font-semibold text-center text-backgroundColor">
            SignUp
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
             onClick={openLoginForm}
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
            {/*change route to login */}
          </p>
          <Input
            label="Name: "
            placeholder="Enter your full name: "
            {...register("name", {
              required: true,
            })}
          />
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
            {...register("password", {
              required: true,
            })}
          />
          <div className="flex flex-row  justify-center gap-2 ">
            <Button title="SignUp" type="submit" />
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
