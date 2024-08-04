import React from 'react'

function Usercard() {
 return (
    <div className="bg-white p-6 rounded shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">Dennis Nzioki</h2>
                <p className="text-gray-600">Customer</p>
                <a href="#" className="text-green-600">
                  Edit Profile
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Billing Address</h3>
              <p>Dennis Nzioki</p>
              <p>4140 Parker Rd. Allentown, New Runda 31134</p>
              <p>dennisnzioki@gmail.com</p>
              <p>254 555-0110</p>
              <a href="#" className="text-green-600">
                Edit Address
              </a>
            </div>
          </div>
        </div>
  )
}

export default Usercard