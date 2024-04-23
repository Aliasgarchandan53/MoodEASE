import React, { useState ,useContext, useEffect} from "react";
import { Link} from "react-scroll";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const { user , setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
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
          <NavLink
            to="/"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Home
            </NavLink>
            <NavLink
            to="about"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            About Us
            </NavLink>
            <NavLink
            to="services"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Services
            </NavLink>
            <NavLink
            to="doctors"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Doctors
            </NavLink>
            <NavLink
            to="/blog"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Blogs
            </NavLink>
            {
              isAuthenticated?<NavLink
              to="/dashboard"
              className=" hover:text-hoverColor transition-all cursor-pointer"
              >
              Dashboard
              </NavLink>
              :""
            }
          </nav>

          <div className=" hidden lg:flex">
            {
              !isAuthenticated?
              <Button title="Login" onClick={() => loginWithRedirect()}/>
              :<Button title="Logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
            }
            
          </div>

          {showForm && <Contact closeForm={closeForm} />}

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
          <NavLink
            to="/"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Home
            </NavLink>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <NavLink
            to="/blog"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            >
            Blogs
            </NavLink>
            {
              isAuthenticated?<NavLink
              to="/dashboard"
              className=" hover:text-hoverColor transition-all cursor-pointer"
              >
              Dashboard
              </NavLink>
              :""
            }
          <div className=" lg:hidden">
          {
              !isAuthenticated?
              <Button title="Login" onClick={() => loginWithRedirect()}/>
              :<Button title="Logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
          <div className=" lg:hidden">
          { {
              !user.login?<button
              className="bg-brightColor text-white px-6 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
            Login
            </button>
            :
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={logoutFunc}
            >
            Logout
            </button>
            } }
            {
              isAuthenticated?
              <Button title="Login" onClick={() => loginWithRedirect()}/>
              :<Button title="Logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
            }
          </div>
 */

/*Form code :

  const logoutFunc=()=>{
    console.log(location.pathname);
    let newuser={login:false,
    userFirstName: "<error :Not yet login-ed>",
    userLastName: "",
    userEmail: "",
    userPassword: ""};
    setUser(newuser);   
  }

  useEffect(()=>{
    if(!user.login && (location.pathname==="/dashboard")){
      navigate("/");
    }
  },[user,location])
  const redirectTo=()=>{
    if(location.pathname!=="/")
      navigate("/")
  }


*/