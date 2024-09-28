import React,{useState,useEffect} from "react";
import Homepage from "./pages/Homepage.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Pagelayout from "./Pagelayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Doctors from "./components/Doctors.jsx";
import { useDispatch } from "react-redux";
import authService  from "./appwrite/auth.js";
import {login,logout} from "./features/authentication/authSlice.js"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagelayout />}>
      <Route path="" element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="doctors" element={<Doctors />} />
      <Route path="blog" element={<Blogpage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch= useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
        dispatch(login({userData}))
      else
        dispatch(logout())
    })
    .catch((errror)=>{
      console.log("Error setting user data : ",error);
    })
    .finally(()=>{
      setLoading(false);
    })
  }, []);


  return (
      <RouterProvider router={router} />
  );
}

export default App;
