import React, { useState ,useContext, useEffect} from "react";
import { Link} from "react-scroll";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Login from "../models/Login";
import Signup from "../models/Signup";
import {useSelector} from "react-redux";
import LogoutBtn from "../layouts/LogoutBtn";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const authStatus = useSelector((state)=>state.auth.status);
  const navigate = useNavigate();
  const navItems=[
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:'About us',
      slug:'/about',
      active:true
    },
    {
      name:'Services',
      slug:'/services',
      active:true
    },
    {
      name:'Doctors',
      slug:'/doctors',
      active:true
    },
    {
      name:'Blogs',
      slug:'/blog',
      active:true
    },
    {
      name:'Dashboard',
      slug:'/dashboard',
      active:authStatus
    }
  ]

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openLoginForm = () => {
    setShowLoginForm(true);
    setShowSignupForm(false); // Ensure signup form is closed
    setMenu(false);
  };

  const openSignupForm = () => {
    setShowSignupForm(true);
    setShowLoginForm(false); // Ensure login form is closed
    setMenu(false);
  };

  const closeForm = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };
  
  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">MoodEase</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            {
              navItems.map((item)=>
                item.active?
                (
                  <NavLink to={item.slug}>
                    {item.name}
                  </NavLink>
                )
                :null
              )
            }
          </nav>

          <div className=" hidden lg:flex">
            {
              !authStatus?
              <Button title="Login" onClick={openLoginForm}/>
              :<LogoutBtn />
            }
            
          </div>

          {showLoginForm && <Login closeForm={closeForm} openSignupForm={openSignupForm} />}
          {showSignupForm && <Signup closeForm={closeForm} openLoginForm={openLoginForm}/>} {/* Render Signup */}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >

            {
              navItems.map((item)=>
                item.active?
                (
                  <NavLink to={item.slug}>
                    {item.name}
                  </NavLink>
                )
                :null
              )
            }
          <div className=" lg:hidden">
          {
              !authStatus?
              <Button title="Login" onClick={openLoginForm}/>
              :<LogoutBtn />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
