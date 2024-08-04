import React from "react";

function Sale() {
  return (
    <table className="w-full">
      <thead className="bg-gray-100 uppercase text-gray-600 w-full h-8">
        <tr className="text-gray-600 text-base ">
          <th>Product Name</th>
          <th>Price</th>
          <th>Listed</th>
          <th>Sold</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
      <tr className="">
        <td className="text-center px-4">Aloo</td>
        <td className="text-center px-4">14.00</td>
        <td className="text-center px-4">20</td>
        <td className="text-center px-4">10</td>
        <td className="text-center px-4">18</td>
      </tr>
      <tr className="">
        <td className="text-center px-4">Aloo</td>
        <td className="text-center px-4">14.00</td>
        <td className="text-center px-4">20</td>
        <td className="text-center px-4">10</td>
        <td className="text-center px-4">18</td>
      </tr>
      <tr className="">
        <td className="text-center px-4">Aloo</td>
        <td className="text-center px-4">14.00</td>
        <td className="text-center px-4">20</td>
        <td className="text-center px-4">10</td>
        <td className="text-center px-4">18</td>
      </tr>
      </tbody>
    </table>
  );
}

export default Sale;
