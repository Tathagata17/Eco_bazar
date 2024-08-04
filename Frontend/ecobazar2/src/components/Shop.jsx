import React, { useState } from 'react'
import Productcard from './Cards/Shopcards/Productcard'
import {  useNavigate } from 'react-router-dom'

function Shop() {
  const [raterange,setraterange]=useState(0);
    const navigate =useNavigate();
    const clickedbtn=()=>{
        navigate("/shop/productdetail")
    }
  return (
    <div className='mt-36'>
        <main className="max-w-7xl mx-auto p-4">
    <div className="flex flex-col md:flex-row md:space-x-6">
      
      <aside className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4">
        <button className=" text-white p-2 rounded-lg w-full mb-4" style={{backgroundColor:"#00B207"}}>Filter</button>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">All Categories</h3>
          <ul className="space-y-2">
            <li><input type="checkbox" className="mr-2"/> Fresh Fruit (20)</li>
            <li><input type="checkbox" className="mr-2" checked/> Vegetables (50)</li>
            <li><input type="checkbox" className="mr-2"/> Cooking (5)</li>
            <li><input type="checkbox" className="mr-2"/> Snacks (47)</li>
            <li><input type="checkbox" className="mr-2"/> Beverages (9)</li>
            <li><input type="checkbox" className="mr-2"/> Beauty & Health (8)</li>
            <li><input type="checkbox" className="mr-2"/> Bread & Bakery (5)</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <input type="range" min="0" max="1500" onChange={(e)=>{setraterange(e.target.value)}} className="w-full"/>
          <p>Price: $0 - $1500</p>
          <span>{raterange}</span>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Rating</h3>
          <ul className="space-y-2">
            <li><input type="checkbox" className="mr-2"/> 5.0</li>
            <li><input type="checkbox" className="mr-2"/> 4.0 & up</li>
            <li><input type="checkbox" className="mr-2"/> 3.0 & up</li>
            <li><input type="checkbox" className="mr-2"/> 2.0 & up</li>
            <li><input type="checkbox" className="mr-2"/> 1.0 & up</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Healthy</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Low Fat</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Vegetarian</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Kid foods</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Vitamins</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Bread</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Meat</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Snack</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Tiffin</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Lunch</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Dinner</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Breakfast</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">Fruit</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">79% Discount</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm">on your first order</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">Shop Now</button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Sale Products</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Red Capsicum</span>
              <span>$32.00 <span className="line-through">$50.00</span></span>
            </li>
            <li className="flex justify-between">
              <span>Chinese Cabbage</span>
              <span>$24.00 <span className="line-through">$30.00</span></span>
            </li>
            <li className="flex justify-between">
              <span>Green Capsicum</span>
              <span>$32.00 <span className="line-through">$50.00</span></span>
            </li>
          </ul>
        </div>
      </aside>

      <section className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <label for="sort" className="mr-2">Sort by:</label>
            <select id="sort" className="p-2 border border-gray-300 rounded-lg">
              <option>Latest</option>
              <option>Latest</option>
              <option>Latest</option>
              <option>Latest</option>
            </select>
          </div>
          <p>52 Results Found</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
         <Productcard show={1} clicked={clickedbtn}/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
        </div>
       
        <div className="flex justify-center mt-8 bottom-0">
          <ul className="flex space-x-2">
            <li className="bg-gray-200 p-2 rounded-lg">1</li>
            <li className="bg-gray-200 p-2 rounded-lg">2</li>
            <li className="bg-gray-200 p-2 rounded-lg">3</li>
            <li className="bg-gray-200 p-2 rounded-lg">4</li>
            <li className="bg-gray-200 p-2 rounded-lg">5</li>
            <li className="bg-gray-200 p-2 rounded-lg">...</li>
            <li className="bg-gray-200 p-2 rounded-lg">21</li>
          </ul>
        </div>
      </section>
    </div>
  </main>
    </div>
  )
}

export default Shop