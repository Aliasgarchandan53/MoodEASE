import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";
import { login, logout } from "./features/authentication/authSlice.js";
import component from "./components/index.js";
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
      })
      .catch((error) => {
        console.log("Error setting user data : ", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <>
      <component.Navbar />
      <Outlet />
      <component.Footer />
    </>
  ) : null;
}

export default App;
