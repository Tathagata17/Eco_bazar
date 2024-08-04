import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "typeface-poppins";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AdminHomeLayout, AdminLayout, Layout, ShopLayout } from "./Layout";
import Home from "./components/Home";
import Signup from "./components/Userhandler/Signup";
import Login from "./components/Userhandler/Login";
import Faq from "./components/Faq";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Shop from "./components/Shop";
import Productdetail from "./components/Productdetail";
import Error404 from "./components/Error404";
import Userboard from "./components/Userboard";
import AdminHome from "./components/Adminhandler/AdminHome";
import AdminSignup from "./components/Adminhandler/AdminSignup";
import AdminLogin from "./components/Adminhandler/AdminLogin";
import Sale from "./components/Adminhandler/AdminHomeCards/Sale";
import Listing from "./components/Adminhandler/AdminHomeCards/Listing";
import Setting from "./components/Adminhandler/AdminHomeCards/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/usersignup" element={<Signup />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Userprofile" element={<Userboard />} />
        <Route path="/shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path="productdetail" element={<Productdetail />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/Admin" element={<AdminLayout />}>
        <Route  element={<AdminHomeLayout />}>
          <Route index  element={<Sale/>} />
          <Route path="hap" element={<h1>hello</h1>}/>
          <Route path="listing" element={<Listing/>}/>
          <Route path="setting" element={<Setting/>}/>
          <Route path="listing" element={<Listing/>}/>
        </Route>
        <Route path="AdminSignup" element={<AdminSignup />} />
        <Route path="AdminLogin" element={<AdminLogin />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
