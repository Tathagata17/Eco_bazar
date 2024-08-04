import React, { useState } from "react";

function Orderdetail({ data }) {
  const [orderstate, setorderstate] = useState(1);
  console.log(data);
  return (
    <section class="flex-1 bg-white shadow-lg p-6 rounded-lg ml-0 mt-4">
      <div class="flex">
        <h2 class="text-2xl font-bold text-gray-700 mb-4">
          Order Details - April 24, 2023 - 3 Products
        </h2>
        <h2 class="ml-auto" style={{ left: 0, color: "#00B207" }}>
          <a href="/userprofile">Back to list</a>
        </h2>
      </div>
      <div class="flex justify-between mb-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Billing Address</h3>
          <p class="text-gray-600">
            Dianne Russell
            <br />
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p class="text-gray-600">
            Email: dianne.russel@gmail.com
            <br />
            Phone: (671) 555-0110
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Shipping Address</h3>
          <p class="text-gray-600">
            Dianne Russell
            <br />
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p class="text-gray-600">
            Email: dianne.russel@gmail.com
            <br />
            Phone: (671) 555-0110
          </p>
        </div>
        <div class="text-right">
          <h3 class="text-lg font-semibold text-gray-700">Order ID: #452</h3>
          <p class="text-gray-600">Payment Method: Paypal</p>
          <p class="text-gray-600">
            Subtotal: $365.00
            <br />
            Discount: 20%
            <br />
            Shipping: Free
            <br />
            Total: $84.00
          </p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <div class="flex-1">
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center"
              style={
                data === 1||data===2
                  ? { backgroundColor: "#00B207", color: "white" }
                  : {}
              }
            >
              01
            </div>
            <div
              class="flex-1 h-1"
              style={
                data === 1||data===2||data===3||data===4
                  ? { backgroundColor: "#00B207" }
                  : { backgroundColor: "gray" }
              }
            ></div>
          </div>
          <p class="text-gray-600 mt-2">Order received</p>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <div
              class="w-10 h-10  rounded-full flex items-center justify-center"
              style={
                data === 2 || data === 3 || data === 4
                  ? { backgroundColor: "#00B207", color: "white" }
                  : { backgroundColor: "gray" }
              }
            >
              02
            </div>
            <div
              class="flex-1 h-1"
              style={
                data === 3 || data === 4
                  ? { backgroundColor: "#00B207" }
                  : { backgroundColor: "gray" }
              }
            ></div>
          </div>
          <p class="text-gray-600 mt-2">Processing</p>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center"
              style={
                data === 3 || data === 4
                  ? { backgroundColor: "#00B207", color: "white" }
                  : { backgroundColor: "gray" }
              }
            >
              03
            </div>
            <div
              class="flex-1 h-1"
              style={
                data === 4
                  ? { backgroundColor: "#00B207" }
                  : { backgroundColor: "Gray" }
              }
            ></div>
          </div>
          <p class="text-gray-600 mt-2">On the way</p>
        </div>
        <div class="flex-1">
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center "
              style={
                data === 4
                  ? { backgroundColor: "#00B207", color: "white" }
                  : { backgroundColor: "gray" }
              }
            >
              04
            </div>
          </div>
          <p class="text-gray-600 mt-2">Delivered</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Product</th>
              <th class="py-3 px-6 text-left">Price</th>
              <th class="py-3 px-6 text-center">Quantity</th>
              <th class="py-3 px-6 text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6"
                      src="red-capsicum.png"
                      alt="Red Capsicum"
                    />
                  </div>
                  <span class="font-medium">Red Capsicum</span>
                </div>
              </td>
              <td class="py-3 px-6 text-left">$14.00</td>
              <td class="py-3 px-6 text-center">x5</td>
              <td class="py-3 px-6 text-center">$70.00</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6"
                      src="green-capsicum.png"
                      alt="Green Capsicum"
                    />
                  </div>
                  <span class="font-medium">Green Capsicum</span>
                </div>
              </td>
              <td class="py-3 px-6 text-left">$14.00</td>
              <td class="py-3 px-6 text-center">x2</td>
              <td class="py-3 px-6 text-center">$28.00</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6"
                      src="green-chili.png"
                      alt="Green Chili"
                    />
                  </div>
                  <span class="font-medium">Green Chili</span>
                </div>
              </td>
              <td class="py-3 px-6 text-left">$26.70</td>
              <td class="py-3 px-6 text-center">x10</td>
              <td class="py-3 px-6 text-center">$267.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Orderdetail;
