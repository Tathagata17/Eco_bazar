import { CircleX } from 'lucide-react'
import React from 'react'
import tomtom from "../../../assets/tomatoes.jpg"

function Wishlistcard() {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
    <td className="py-3 px-6 text-left flex items-center">
        <img src={tomtom} alt="Tomato" className="w-10 h-10 mr-3 object-contain"/>
        <span>Tomato</span>
    </td>
    <td className="py-3 px-6 text-left">$14.99</td>
    <td className="py-3 px-6 text-left">
        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">In Stock</span>
    </td>
    <td className="py-1 px-3 text-left ">
        <button className=" text-white py-1 px-3 rounded-md" style={{backgroundColor:"#00B207"}}>Add to Cart</button>
    </td>
    <td className="py-2 px-3 text-left ">
        <CircleX size={"1.2rem"}/>
    </td>
</tr>
  )
}

export default Wishlistcard