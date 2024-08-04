import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className=" mt-8 h-96 top-96 w-full  font-poppins text-white" style={{backgroundColor:"#1A1A1A"}}>
    <div className='ml-32 mr-32'>
      <ul className='flex gap-28'>
        <li className='mt-8'>
          <p className='text-white text-4xl font-bold ' >EcoBazar</p>
          <p className='text-white font-semibold mt-4 text-wrap w-64'>
            Ecobazar the worlds best bazar everything is available here even tiger's milk
          </p>
          <p className='mt-4'>
            <a  className="text-white" href="#">Ecobazar@gmail.com</a>
          </p>
        </li>
        <li className='mt-8'>
          <p className='text-white text-1xl font-semibold'>My Account</p>
          <ul>
            <li>
            <NavLink className='text-white'>
            My Account
          </NavLink>
            </li>
            <li>
            <NavLink>
            Order History
          </NavLink>
            </li>
            <li> <NavLink>
            Shopping Cart
          </NavLink></li>
            <li>  <NavLink>
            Wishlist
          </NavLink></li>
          </ul>
        </li>
        <li className='mt-8'>
          <p className='text-white text-1xl font-semibold'>Helps</p>
        </li>
        <li className='mt-8'>
          <p className='text-white text-1xl font-semibold'>Proxys</p>
          </li>
        <li className='mt-8'>
          <p className='text-white text-1xl font-semibold'>Categories</p>
          </li>
      </ul>
    </div>
    <div>
    </div>
    <div className='bg-neutral-400 h-0.5 ml-32 mr-32'>
    </div>
    </div>
    </>
  )
}

export default Footer