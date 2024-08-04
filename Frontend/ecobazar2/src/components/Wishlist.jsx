import React from 'react'
import Wishlistcard from './Cards/wishlistcards/Wishlistcard'

function Wishlist() {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div className='mt-12 flex'>
        <main className="container m-16 p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <tr>
                        <th className="py-3 px-6 text-left">Product</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Stock Status</th>
                        <th className="py-3 px-6 text-right"></th>
                        <th className="py-1 px-1 text-left"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {arr.map((item,index)=>{
                        return(<Wishlistcard/>)
                    })}
                </tbody>
            </table>
        </div>
    </main>
    </div>
  )
}

export default Wishlist