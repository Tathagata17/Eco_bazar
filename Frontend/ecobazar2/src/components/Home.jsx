import React from 'react'
import banner1 from "../assets/Bannar.png"
import banner2 from "../assets/Bannar2.png"
import banner3 from "../assets/Bannar3.png"
function Home() {
  return (
    <>
    <div className="flex gap-3">
      <img className='w-1/2 h-1/2 ml-32 mt-4' src={banner1} alt='banner'/>
      <div>
      <img className='w-96 h-32' src={banner2} alt='banner'/>
      <img className='w-96 h-32' src={banner3} alt='banner'/>
      </div>
      </div>
    </>
  )
}

export default Home