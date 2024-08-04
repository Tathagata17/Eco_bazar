import React, { useState } from "react";
import Sale from "./AdminHomeCards/Sale";
import { NavLink } from "react-router-dom";

function AdminHome() {
  const [nav, setnav] = useState("1");
  const handlecolorchange = (e) => {
    setnav(e.target.id);
  };
  return (
      <aside className="bg-gray-200 w-1/3 h-auto rounded-md font-poppins  py-2 ">
        <ul>
          <NavLink to={"/Admin"}>
          <li
            onClick={(e) => {
              handlecolorchange(e);
            }}
            id="1"
            className=" hover:bg-gray-200 h-10 mt-2 p-2 border-2 cursor-pointer"
            style={
              nav === "1"
                ? { color: "rgb(0, 178, 7)", borderLeftColor: "rgb(0, 178, 7)" ,backgroundColor:"#f3f4f6"}
                : {}
            }
          >
            Dashboard
          </li>
          </NavLink>
          <NavLink to={"/Admin/hap"}>
          <li
            onClick={(e) => {
              handlecolorchange(e);
            }}
            id="2"
            className=" hover:bg-gray-300 h-10 mt-2 p-2 border-2 cursor-pointer"
            style={
              nav === "2"
                ? { color: "rgb(0, 178, 7)", borderLeftColor: "rgb(0, 178, 7)" ,backgroundColor:"#f3f4f6"}
                : {}
            }
          >
            Sales
          </li>
          </NavLink>
          <NavLink to={"/Admin/listing"}>
          <li
            onClick={(e) => {
              handlecolorchange(e);
            }}
            id="3"
            className="hover:bg-gray-300 h-10 mt-2 p-2 border-2 cursor-pointer"
            style={
              nav === "3"
                ? { color: "rgb(0, 178, 7)", borderLeftColor: "rgb(0, 178, 7)" ,backgroundColor:"#f3f4f6"}
                : {}
            }
          >
            List Product
          </li>
          </NavLink>
          <NavLink to={"/Admin/setting"}>
          <li  onClick={(e) => {
              handlecolorchange(e);
            }}
            id="4"
            className="hover:bg-gray-300 h-10 mt-2 p-2 border-2 cursor-pointer"
            style={
              nav === "4"
                ? { color: "rgb(0, 178, 7)", borderLeftColor: "rgb(0, 178, 7)" ,backgroundColor:"#f3f4f6"}
                : {}
            }>Setting</li>
            </NavLink>
          <li  onClick={(e) => {
              handlecolorchange(e);
            }}
            id="5"
            className="hover:bg-gray-300 h-10 mt-2 p-2 border-2 cursor-pointer"
            style={
              nav === "5"
                ? { color: "rgb(0, 178, 7)", borderLeftColor: "rgb(0, 178, 7)" ,backgroundColor:"#f3f4f6"}
                : {}
            }>Admin</li>
        </ul>
      </aside>
  );
}

export default AdminHome;
