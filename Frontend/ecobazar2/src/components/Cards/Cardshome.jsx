import React from 'react'

function Cardshome({img}) {
  return (
    <div className="w-32 h-32 flex justify-center items-center bg-white border rounded-lg shadow">
        <img src={img} alt='cardimages' className='w-28 h-28'/>
   </div>
  )
}

export default Cardshome