import React from 'react'
import img404 from "../assets/Illustration.png"
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className='mt-40 flex justify-center items-center flex-col'>
        <img src={img404} alt='errorimg'/>
        <div className='flex justify-center items-center flex-col'>
            <p className='font-poppins font-bold text-2xl'>Oops! Page Not Found</p>
            <p>
               sorry Something is wrong at your side
            </p>
            <NavLink to={"/"}>
            <button className="px-2 h-10 mt-2 text-white rounded-xl" style={{backgroundColor:"#00B207"}}>
                Back to Home
            </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Error404