import React, { useState } from "react";
import img from "../../../assets/fruits.png";
import { Heart, ShoppingBagIcon, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Productcard({ clicked,show}) {
  const navigate =useNavigate();
  const clickedbtn=()=>{
      navigate("/shop/productdetail")
  }
  const [like, setlike] = useState("white");
  const [disable, setdisable] = useState(false);
  const handlelike = () => {
    if (like === "white") {
      setlike("red");
    } else {
      setlike("white");
    }
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:border-green-500 border"
    >
      {show && (
        <div
          className="text-white h-6 w-20 rounded-md px-1 flex justify-center items-center font-poppins absolute"
          style={{ backgroundColor: "#EA4B48", fontSize: "0.8rem" }}
        >
          BEST DEAL
        </div>
      )}
      <img
      loading="lazy"
        src={"https://res.cloudinary.com/dnah9elep/image/upload/v1722663274/tomatoes_caclsy.jpg"}
        alt="Big Potatos"
        className="w-full h-32 object-contain mb-4 rounded-lg"
      />
      <h3 className="text-lg font-semibold mb-2">Big Potatos</h3>
      <div className="flex gap-32">
        <div>
          <p className="mt-2 text-lg" style={{ color: "#00B207" }}>
            $14.99
          </p>
          <div
            className="flex rounded-xl h-5 justify-center items-center"
            style={{ backgroundColor: "#EA4B48" }}
          >
            <p
              className=""
              style={{
                backgroundColor: "#EA4B48",
                color: "white",
                fontSize: "0.8rem",
              }}
            >
              1.0
            </p>
            <Star color="white" size={"1rem"} />
          </div>
        </div>
        <div className="flex gap-4">
          <p className="mt-5 ml-1" onClick={handlelike}>
            <Heart size={"1.5rem"} color="red" fill={like} onClick={()=>{handlelike()}}/>
          </p>
          <button
            className="text-white p-2 mt-4 h-8 rounded-lg"
            style={{ backgroundColor: "#00B207" }}
            onClick={()=>{clickedbtn()}}
          >
            <ShoppingBagIcon size={"1.2rem"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
