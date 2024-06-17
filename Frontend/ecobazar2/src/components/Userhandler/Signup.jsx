import React, { useState } from 'react'
import { LucideEye,LucideEyeOff } from 'lucide-react'

function Signup() {

    const [password,setpassword]=useState("password")


  return (
    <div className='flex justify-center  h-96 w-96 bg-gray-300 mt-4 rounded'>
        <p className='text-gray-900 font-semibold text-3xl '>Sign up</p>
        <div className='mt-14'>
            <input type='text' className='h-8 w-36'/>
            <div className='flex'>
            <input type={password}/>
            <LucideEye/>
            </div>
        </div>
    </div>
  )
}

export default Signup