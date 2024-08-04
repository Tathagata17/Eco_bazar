import React, { useEffect, useState } from "react";
import Search from "./Search";
import locationimage from "../assets/pin.png";
import bread from "../assets/Breadcrumbs .png";
import { NavLink, useLocation } from "react-router-dom";
import { Heart, ShoppingBagIcon, UserCircle2 } from "lucide-react";
const logo="https://res.cloudinary.com/dnah9elep/image/upload/v1722660934/plant_1_jsrdis.png";
function Header() {
  const location = useLocation();
  let breadcrum;
  if (location.pathname === "/") {
    breadcrum = null;
  } else {
    breadcrum = (
      <div>
        <img className="h-14 w-full" src={bread} alt="breadcrum" />
      </div>
    );
  }
  //
  //
  //handle header when scroll
  const [scroll, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // You can adjust this value based on when you want to hide the header
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
            <NavLink to="/usersignup">Signup</NavLink>
          </li>
          <li className="mr-6 font-light text-xs hover:underline">
            <NavLink to="/userlogin">Login</NavLink>
          </li>
          <li className="mr-36 font-light text-xs hover:underline">
            <NavLink to="/Admin">Seller</NavLink>
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
          <li className="mt-2 mr-auto flex items-center">
            <Search />
          </li>
          <li className="mr-8 mt-2">
            <div
              className="absolute h-4 w-4  flex justify-center items-center font-poppins "
              style={{ backgroundColor: "#00B207", borderRadius: "100rem" }}
            >
              <h1 style={{ color: "white", fontSize: "1rem" }}>1</h1>
            </div>
            <NavLink to={"/wishlist"}>
              <Heart size={30} strokeWidth={1.5} className="cursor-pointer" />
            </NavLink>
          </li>
          <li className="mr-8 mt-2">
            <div
              className="absolute h-4 w-4  flex justify-center items-center font-poppins "
              style={{ backgroundColor: "#00B207", borderRadius: "100rem" }}
            >
              <h1 style={{ color: "white", fontSize: "1rem" }}>1</h1>
            </div>
            <NavLink to={"/cart"}>
              <ShoppingBagIcon
                size={30}
                strokeWidth={1.5}
                className="cursor-pointer"
              />
            </NavLink>
          </li>
          <li className="mr-32 mt-2">
            <NavLink to="/userprofile">
            <UserCircle2
              size={30}
              strokeWidth={1.5}
              className="cursor-pointer"
            />
            </NavLink>
          </li>
        </ul>
      </div>
      {!scroll && (
        <div
          className="h-7 flex items-center bg-gray-800"
          style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.5)" }}
        >
          <ul className="flex text-white gap-8 ml-36">
            <li className="m-3 mt-2 font-extralight hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="m-3 mt-2 font-extralight hover:underline">
              <NavLink to="/shop">Shop</NavLink>
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
      )}
      {!scroll&&breadcrum}
    </div>
  );
}

export default Header;

//https://res.cloudinary.com/dnah9elep/image/upload/v1722660934/plant_1_jsrdis.png