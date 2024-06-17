import React from 'react'
import { LucideQuote } from 'lucide-react'

function Customertestimonialcard({text,user}) {
  return (
    <div className='bg-white w-96 h-48'>
        <LucideQuote color="#15803D"/>
        <p className='text-gray-400 p-2  font-semibold text-sm'>{text}</p>
        <p>{user}</p>
    </div>
  )
}

export default Customertestimonialcard