import React from "react";
import logo from "../assets/Logo.png";
import Search from "./Search";
import whislist from "../assets/wishlist.png";
import cart from "../assets/shopping-cart.png";
import locationimage from "../assets/pin.png";
import bread from "../assets/Breadcrumbs .png"
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);
  let  breadcrum;
  if(location.pathname==="/")
    {
      breadcrum=null
    }
    else
    {
      breadcrum=<div>
      <img src={bread} alt="breadcrum" />
    </div>
    }
  return (
    <>
      <div className="">
        <ul className="flex">
          <li className="mr-auto ml-32 flex text-gray-700">
            <img
              className="h-3 w-3 mt-1.5"
              src={locationimage}
              alt="location"
            />
            Tamluk,West Bengal
          </li>
          <li className=" mr-6">signup</li>
          <li className=" mr-36">login</li>
        </ul>
      </div>
      <div className="h-0.5 bg-neutral-300"></div>
      <div className="h-12">
        <ul className="flex">
          <li className="mr-auto ml-32">
            <img className="h-8 w-32 m-2" src={logo} alt="logo" />
          </li>
          <li className=" mt-2 mr-auto flex">
            <Search />
            <button className="h-8 w-32  bg-green-700 text-white rounded-lg">
              Search
            </button>
          </li>
          <li className="mr-8">
            <img src={whislist} alt="whislist" className="w-6 h-6 mt-2" />
          </li>
          <li className="mr-32">
            <img src={cart} alt="cart" className="w-6 h-6 mt-2" />
          </li>
        </ul>
      </div>
      <div className=" bg-gray-900 h-10 flex">
        <ul className="flex text-white">
          <li className="m-3 mt-1.5 ml-36">Home</li>
          <li className="m-3 mt-1.5">shop</li>
          <li className="m-3 mt-1.5">blog</li>
          <li className="m-3 mt-1.5">about us</li>
          <li className="m-3 mt-1.5">contact us</li>
        </ul>
      </div>
      {breadcrum}
    </>
  );
}

export default Header;
