import React from "react";
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
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Doctors from "./components/Doctors.jsx";

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
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
