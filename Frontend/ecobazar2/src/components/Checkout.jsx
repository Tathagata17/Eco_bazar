import React from 'react'

function Checkout() {
    const color="rgba(32,181,38,5)";
    const validationerrorcolor="#EA4B48"
  return (
    <div className='mt-16'>
        <main className="max-w-7xl mx-auto p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-2">
      <h1 className="text-3xl font-bold text-center mb-2">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First name" className="p-2 border border-gray-300 rounded-lg" style={{outlineColor:"rgba(32,181,38,5)"}}/>
              <input type="text" placeholder="Last name" className="p-2 border border-gray-300 rounded-lg" style={{outlineColor:color}}/>
              <input type="text" placeholder="Company name (optional)" className="p-2 border border-gray-300 rounded-lg col-span-2"/>
              <input type="text" placeholder="Street Address" className="p-2 border border-gray-300 rounded-lg col-span-2" style={{outlineColor:color}}/>
              <select className="p-2 border border-gray-300 rounded-lg">
                <option>Country / Region</option>
              </select>
              <select className="p-2 border border-gray-300 rounded-lg">
                <option>States</option>
              </select>
              <input type="text" placeholder="Zip Code" className="p-2 border border-gray-300 rounded-lg"/>
              <input type="email" placeholder="Email Address" className="p-2 border border-gray-300 rounded-lg col-span-2" style={{}}/>
              <input type="tel" placeholder="Phone number" className="p-2 border border-gray-300 rounded-lg col-span-2"/>
            </div>
            <div className="mb-4">
              <input type="checkbox" id="ship-diff-address" className="mr-2"/>
              <label for="ship-diff-address">Ship to a different address</label>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Additional Info</h3>
              <textarea placeholder="Notes about your order, e.g. special notes for delivery" className="p-2 border border-gray-300 rounded-lg w-full h-24"></textarea>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <p>Green Capsicum x5</p>
              <p>$70.00</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Red Capsicum x1</p>
              <p>$14.00</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Subtotal:</p>
              <p>$84.00</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Total:</p>
              <p>$84.00</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="mb-4">
            <input type="radio" name="payment" id="cod" className="mr-2"/>
            <label for="cod">Cash on Delivery</label>
          </div>
          <div className="mb-4">
            <input type="radio" name="payment" id="paypal" className="mr-2"/>
            <label for="paypal">Paypal</label>
          </div>
          <div className="mb-4">
            <input type="radio" name="payment" id="amazon" className="mr-2"/>
            <label for="amazon">Amazon Pay</label>
          </div>
          <button className=" text-white w-full py-2 rounded-lg" style={{backgroundColor:"#00B207"}}>Place Order</button>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Checkout