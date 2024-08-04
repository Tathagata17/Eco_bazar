import React from "react";
import apple from "../../../assets/apple.jpg";
import { Heart, LucideEye, ShoppingBagIcon } from "lucide-react";

function Bigcard() {
  return (
    <div className="font-poppins">
      <div>
        <div className="flex mt-4 ml-3 absolute gap-8 font-poppins">
          <div className="px-3 p-1 rounded-sm" style={{backgroundColor:"#EA4B48"}}>
            <p className="text-white" style={{fontSize:"0.8rem"}}>Sale</p>
          </div>
          <div className="p-1 rounded-sm" style={{ backgroundColor: "#2388FF" }}>
            <p className="text-white" style={{fontSize:"0.8rem"}}>Best Deal</p>
          </div>
        </div>
        <img loading="lazy" src={apple} className="object-contain w-full rounded-t-lg " />
      </div>
      <div>
        <div className="flex mt-2 flex-row gap-4 px-2 justify-center items-center">
            <Heart/>
            <button className="p-2 px-20 rounded-2xl" style={{backgroundColor:"#00B207"}}>
                <div className="flex flex-row text-white">
                <p className="px-2">Add to cart</p>
                <ShoppingBagIcon  color="white"/>
                </div>
            </button>
            <LucideEye/>
        </div>
        <div className="font-poppins flex flex-col justify-center items-center">
            <p style={{fontSize:"2rem", color:"#00B207"}}>Red Apple</p>
            <p style={{fontSize:"1.5rem"}}>$12.00<span style={{marginLeft:"0.4rem",color:"#999999",textDecoration:"line-through"}}>24.00</span></p>
            <p style={{color:"#999999",fontSize:"0.8rem"}}>rating</p>
            <p style={{color:"#999999",fontSize:"0.8rem"}}>Hurry up! offer ends in:</p>
            <p>{Date.now()}</p>
        </div>
      </div>

      </div>
  );
}

export default Bigcard;
