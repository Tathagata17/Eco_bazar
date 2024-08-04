import { Heart, HistoryIcon, LayoutDashboard, LucideLogOut, SettingsIcon, ShoppingBagIcon } from "lucide-react";
import React, { useState } from "react";
import Ordercard from "./Cards/Ordercard/Ordercard";
import Wishlist from "../components/Wishlist";
import { NavLink } from "react-router-dom";
import Orderdetail from "./Cards/Ordercard/Orderdetail";
import Usercard from "./Cards/Usercard/Usercard";
import Usersetting from "./Cards/Usercard/Usersetting";

function Userboard() {
  const arr=[1,2,3,4,5,6,7,8,9,10];
  const [orderdata,setorderdata]=useState(0)
  const orderdetailshow=(id)=>{
    console.log(id);
    setnavigation(7);
    setorderdata(id);
  }
    const [navigation,setnavigation]=useState(1)
    const [design,setdesign]=useState('')
    const selectnavigation=()=>{
      switch (navigation) {
        case 1:
          return(<div className="mt-6">
            <div className="bg-white p-6 rounded shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Recent Order History</h2>
                <a href="/" className="text-green-600">
                  View All
                </a>
              </div>
              <table className="w-full mt-4">
                <thead className=" w-full bg-gray-200 text-gray-600 uppercase text-sm">
                  <tr>
                    <th className="py-2">ORDER ID</th>
                    <th className="py-2">DATE</th>
                    <th className="py-2">TOTAL</th>
                    <th className="py-2">STATUS</th>
                    <th className="py-2">DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  <Ordercard data={1} orderdetailshow={orderdetailshow}/>
                  <Ordercard  data={2} orderdetailshow={orderdetailshow}/>
                </tbody>
              </table>
            </div>
          </div>)
          case 2:
            return(<div className="mt-6">
              <div className="bg-white p-6 rounded shadow-md">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Order History</h2>
                  <a href="/" className="text-green-600">
                    View All
                  </a>
                </div>
                <table className="w-full mt-4">
                  <thead className=" w-full bg-gray-200 text-gray-600 uppercase text-sm">
                    <tr>
                      <th className="py-2">ORDER ID</th>
                      <th className="py-2">DATE</th>
                      <th className="py-2">TOTAL</th>
                      <th className="py-2">STATUS</th>
                      <th className="py-2">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((item,index)=>{
                      return(<Ordercard data={item} orderdetailshow={orderdetailshow}/>)
                    })}
                  </tbody>
                </table>
              </div>
            </div>)
            case 7:
              return(<Orderdetail data={orderdata}/>)
              case 5:
                return(<Usersetting/>)
        default:
          return null
          break;
      }
    }
  return (
    <div className="flex-1 flex overflow-hidden mt-48">
       
      <aside className="w-64 bg-white shadow-md">
      <h1 className="text-center text-xl font-bold mt-6">Navigation</h1>
        <div className="p-6">
          <nav>
            <ul className="">
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===1?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}} onClick={()=>(setnavigation(1))}>
                <p  className="flex items-center">
                  <LayoutDashboard/>
                  <span className="ml-4">Dashboard</span>
                </p>
              </li>
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===2||navigation===7?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}} onClick={()=>(setnavigation(2))}>
                <a href="#" className="flex items-center">
                  <HistoryIcon/>
                  <span className="ml-4">Order History</span>
                </a>
              </li>
              <NavLink to={"/wishlist"}>
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===3?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}}>
                <p className="flex items-center">
                  <Heart/>
                  <span className="ml-4">Wishlist</span>
                </p>
              </li>
              </NavLink>
              <NavLink to={"/cart"}>
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===4?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}}>
                <p  className="flex items-center">
                  <ShoppingBagIcon/>
                  <span className="ml-4">Shopping Cart</span>
                </p>
              </li>
              </NavLink>
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===5?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}} onClick={()=>(setnavigation(5))}>
                <a href="#" className="flex items-center ">
                  <SettingsIcon/>
                  <span className="ml-4">Settings</span>
                </a>
              </li>
              <li className="mb-2 h-10 px-2 py-2 hover:bg-gray-200 border-s-2" style={navigation===6?{borderColor:"#00B207", color:"#00B207"}:{border:"none"}}>
                <a href="#" className="flex items-center">
                  <LucideLogOut/>
                  <span className="ml-4">Log-out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        {navigation===1?<Usercard/>:null}

        {selectnavigation()}
      </main>
    </div>
  );
}

export default Userboard;
