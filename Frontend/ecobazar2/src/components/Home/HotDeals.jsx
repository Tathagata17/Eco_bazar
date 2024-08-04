import React from 'react'
import Popularproductcard from '../Cards/popularproductscard/Popularproductcard'
import Bigcard from '../Cards/popularproductscard/Bigcard'

function HotDeals() {
  return (
    <>
    <div className=' mt-4 ml-32 mr-32'>
        <div className='flex gap-0'>
            <div className='rounded-md shadow-lg hover:border-green-500 border' style={{width:"25.4rem"}}>
               <Bigcard/>
            </div>
            <div className='grid grid-cols-3 gap-3'>
           <Popularproductcard/>
           <Popularproductcard/>
           <Popularproductcard/>
           <Popularproductcard/>
           <Popularproductcard/>
           <Popularproductcard/>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-3'>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        </div>
    </div>
    </>
  )
}

export default HotDeals