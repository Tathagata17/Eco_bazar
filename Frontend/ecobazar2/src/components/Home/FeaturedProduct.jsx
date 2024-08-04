import React from 'react'
import wis from "../../assets/fruits.png"
import Popularproductcard from '../Cards/popularproductscard/Popularproductcard'
function FeaturedProduct() {
  return (
    <div className='grid grid-cols-5 gap-3'>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
        <Popularproductcard/>
    </div>
  )
}

export default FeaturedProduct