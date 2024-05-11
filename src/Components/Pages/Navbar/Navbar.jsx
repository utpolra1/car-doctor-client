import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut(); // Call the logOut function
  };

  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <img className="h-16" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
           <NavLink to="/bookings">My Bookings</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div>
            <li className="btn">
              <NavLink to="/login">Login</NavLink>
            </li>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-4">
            <img src={user?.photoURL} alt="User" />
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Navbar;
