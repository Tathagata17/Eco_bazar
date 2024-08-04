import React, { useEffect, useState } from "react";
import tomtom from "../../../assets/tomatoes.jpg"

function Cartcards() {
    const price=18;
  const [quantity, setquantity] = useState(1);
  const [subtotal,setsubtotal]=useState(price);
  const increase = () => {
    setquantity(quantity+1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setquantity(quantity-1);
    }
  };
  useEffect(()=>{
    setsubtotal(price*quantity);
  },[quantity])
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left flex items-center">
        <img
          src={tomtom}
          alt="Tomato"
          className="w-10 h-10 mr-3 object-contain"
        />
        <span>Tomato</span>
      </td>
      <td className="py-3 px-6 text-left">${price}</td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
            onClick={() => {
              decrease();
            }}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
            className="w-12 text-center border border-gray-300 "
          />
          <button
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
            onClick={() => {
              increase();
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-3 px-6 text-right">${subtotal}</td>
      <td className="py-3 px-6 text-right">
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default Cartcards;
