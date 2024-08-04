import React from "react";
import Cartcards from "./Cards/Cartcards/Cartcards";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <div className="mt-16 p-10 flex">
      <main className="container mx-auto m-16">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Shopping Cart
        </h1>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-2/3 bg-white shadow-md rounded-md p-6">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-right">Subtotal</th>
                  <th className="py-3 px-6 text-right"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <Cartcards />
                <Cartcards />
                <Cartcards />
                <Cartcards />
              </tbody>
            </table>
            <div className="flex justify-between mt-6">
              <NavLink to={"/"}>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
                  Return to shop
                </button>
              </NavLink>
              <button
                className=" text-white py-2 px-4 rounded-md"
                style={{ backgroundColor: "#00B207" }}
              >
                Update Cart
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">$84.00</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-700">Free</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-700 font-bold">Total</span>
              <span className="text-gray-700 font-bold">$84.00</span>
            </div>
            <NavLink to={"/checkout"}>
            <button
              className=" text-white w-full py-2 rounded-md"
              style={{ backgroundColor: "#00B207" }}
            >
              Proceed to checkout
            </button>
            </NavLink>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter code"
              className="w-full lg:w-auto flex-1 p-2 border border-gray-300 rounded-l-md"
            />
            <button className="bg-gray-700 text-white px-4 rounded-r-md">
              Apply Coupon
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
