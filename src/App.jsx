import React from 'react';
import Homepage from './pages/Homepage.jsx'
import Blogpage from './pages/Blogpage.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Pagelayout from "./Pagelayout.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagelayout />} >
      <Route path="" element={<Homepage/>}/>
      <Route path="blog" element={<Blogpage/>}/>
    </Route>
  )
)



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
