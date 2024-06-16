import React from 'react'
import logo from '../assets/Logo.png'
import Search from './Search'
import whislist from '../assets/wishlist.png'
import cart from '../assets/shopping-cart.png'
import locationimage from "../assets/pin.png"
function Header() {
  return (
    <>
    <div className=''>
      <ul className="flex">
        <li className="mr-auto ml-32 flex text-gray-700">
          <img className="h-3 w-3 mt-1.5" src={locationimage} alt='location'/>
          Tamluk,West Bengal
          </li>
        <li className=" mr-6">
          signup
          </li>
        <li className=" mr-36">
          login
          </li>
      </ul>
    </div>
    <div className="h-0.5 bg-slate-200">
    </div>
    <div className="h-12">
      <ul className="flex">
        <li className='mr-auto ml-32'>
          <img className="h-8 w-32 m-2" src={logo} alt='logo'/>
        </li>
        <li className=" mt-2 mr-auto flex">
          <Search/>
          <button className="h-8 w-32  bg-green-700 text-white rounded-lg">
            Search
          </button>
          </li>
        <li className='mr-8'>
          <img src={whislist} alt='whislist' className='w-6 h-6 mt-2'/>
        </li>
        <li className='mr-32'>
          <img src={cart} alt='cart' className='w-6 h-6 mt-2'/>
        </li>
      </ul>
    </div>
    <div className=" bg-gray-800 h-10 flex">
      <ul className="flex text-white">
        <li className="m-3 mt-1.5 ml-36">
          Home
        </li>
        <li className="m-3 mt-1.5">
          shop
        </li>
        <li className="m-3 mt-1.5">
          blog
        </li>
        <li className="m-3 mt-1.5">
          about us
        </li>
        <li className="m-3 mt-1.5">
          contact us
          </li>
      </ul>
    </div>
    </>


  )
}

export default Header