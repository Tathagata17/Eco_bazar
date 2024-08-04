import React from 'react'

function Searchcard({data}) {
  return (
    <div className='h-10 rounded-lg px-4 py-2 bg-slate-100 hover:bg-slate-200'>
        <p className='text-gray-500'>Hello{data}</p>
    </div>
  )
}

export default Searchcard