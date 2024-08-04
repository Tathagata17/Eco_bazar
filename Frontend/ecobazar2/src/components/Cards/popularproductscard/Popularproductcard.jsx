import React from "react";
import tomtom from "../../../assets/tomatoes.jpg";
import { Heart, ShoppingBagIcon, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Popularproductcard() {
  const navigate=useNavigate();
  const clickedbtn=()=>{
    navigate("/shop/productdetail")
}
  return (
    <div className="rounded-lg p-4 w-48 bg-white shadow-lg hover:border-green-500 border "onClick={clickedbtn}>
      <div className="flex mt-0 ml-0 absolute gap-1 font-poppins">
        <div className="p-1 rounded-sm" style={{ backgroundColor: "#2388FF" }}>
          <p className="text-white" style={{ fontSize: "0.8rem" }}>
            Best Deal
          </p>
        </div>
      </div>
      <img
        loading="lazy"
        src={"https://res.cloudinary.com/dnah9elep/image/upload/v1722663274/tomatoes_caclsy.jpg"}
        alt="Chinese cabbage"
        className="w-full rounded-t-lg "
      />

      <div className="mt-2">
        <h2 className="text-sm font-poppins font-normal text-gray-800">
          Tomato
        </h2>
        <p className="" style={{ color: "#00B207" }}>
          $12.00
        </p>
        <div className="flex items-center mt-1">
          <div
            className="flex justify-center items-center px-1 rounded-md"
            style={{ backgroundColor: "#EA4B48" }}
          >
            <Star color="white" size={"0.8rem"} />
            <span className="ml-1 text-white text-sm ">4.0</span>
          </div>
          <div className="flex ml-24">
            <ShoppingBagIcon color="#00B207" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popularproductcard;
