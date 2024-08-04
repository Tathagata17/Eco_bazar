import React, { useEffect, useState } from "react";
import logo from "../../assets/plant 1.png"
import locationimage from "../../assets/pin.png";
import { NavLink} from "react-router-dom";

function AdminHeader() {
    return (
      <div className="fixed top-0 left-0 w-full z-10 shadow-md font-poppins bg-white">
        <div className="h-4">
          <ul className="flex items-center">
            <li className="mr-auto ml-32 flex text-gray-700 font-light text-xs">
              <img
                className="h-2 w-2 mt-0.5 mr-1"
                src={locationimage}
                alt="location"
              />
              Tamluk, West Bengal
            </li>
            <li className="mr-6 font-light text-xs hover:underline">
              <NavLink to="/Admin/AdminSignup">Signup</NavLink>
            </li>
            <li className="mr-6 font-light text-xs hover:underline">
              <NavLink to="/Admin/AdminLogin">Login</NavLink>
            </li>
            <li className="mr-36 font-light text-xs hover:underline">
              <NavLink to="/">Customer</NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-neutral-300" style={{ height: "0.1rem" }}></div>
        <div className="h-12 flex items-center">
          <ul className="flex items-center w-full">
            <li className="mr-auto ml-32">
              <NavLink to={"/"}>
                <div className="flex">
                  <img className="h-8 w-12 m-2 object-contain" src={logo} alt="logo" />
                  <h1 className="text-gray-800 font-poppins font-bold text-3xl mt-2">EcoBazar</h1>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
          <div
            className="h-7 flex items-center bg-gray-800"
            style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
          >
            <ul className="flex text-white gap-8 ml-36">
              <li className="m-3 mt-2 font-extralight hover:underline">
                <NavLink to="/Admin">Home</NavLink>
              </li>
              <li className="m-3 mt-2 font-extralight hover:underline">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="m-3 mt-2 font-extralight hover:underline">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="m-3 mt-2 font-extralight hover:underline">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
      </div>
    );
  }

export default AdminHeader




 