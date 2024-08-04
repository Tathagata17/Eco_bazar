import React from 'react'
import Orderdetail from './Orderdetail'

function Ordercard({data,orderdetailshow}) {
 
  return (
    <tr>
                  <td className="py-2 text-center">#738</td>
                  <td className="py-2 text-center">8 Sep, 2024</td>
                  <td className="py-2 text-center">$135.00 (5 Products)</td>
                  <td className="py-2 text-center">Processing</td>
                  <td className="py-2 text-center">
                    <p className="text-green-600 cursor-pointer" onClick={()=>orderdetailshow(data)}>
                      View Details
                    </p>
                  </td>
                </tr>
  )
}

export default Ordercard