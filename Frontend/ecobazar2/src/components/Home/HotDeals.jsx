import React from 'react'

function HotDeals() {
  return (
    <>
    <div className='ml-32 mr-32'>
        <div className='flex gap-4'>
            <div className='bg-blue-300 w-96 h-96'>
                bigcard
            </div>
            <div className='ml-8'>
            <ul className='flex gap-6'>
                <li className='bg-green-300 h-48 w-48'></li>
                <li className='bg-green-300 h-48 w-48'></li>
                <li className='bg-green-300 h-48 w-48'></li>
            </ul>
            <ul className='flex gap-6 mt-3'>
                <li className='bg-green-300 h-48 w-48'></li>
                <li className='bg-green-300 h-48 w-48'></li>
                <li className='bg-green-300 h-48 w-48'></li>
            </ul>
            </div>
        </div>
        <div>
            <ul className='flex gap-3'>
                <li className='bg-red-200 h-56 w-48'></li>
                <li className='bg-red-200 h-56 w-48'></li>
                <li className='bg-red-200 h-56 w-48'></li>
                <li className='bg-red-200 h-56 w-48'></li>
                <li className='bg-red-200 h-56 w-48'></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default HotDeals