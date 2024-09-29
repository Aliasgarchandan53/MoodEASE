import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from "./store/Store.js"
import Homepage from "./pages/Homepage.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Doctors from "./components/Doctors.jsx";
import AuthLayout from './layouts/AuthLayout.jsx'
import Login from "../src/models/Login.jsx"
import Signup from "../src/models/Signup.jsx"
const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Homepage />
    },
    {
      path:'/blog',
      element:<Blogpage />
    },
    {
      path:'/about',
      element:<About />
    },{
      path:'/doctors',
      element:<Doctors />
    },{
      path:'/services',
      element:<Services />
    },{
      path:'/dashboard',
      element:(<AuthLayout authentication={false} >
        <Dashboard/>
      </AuthLayout>)
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
