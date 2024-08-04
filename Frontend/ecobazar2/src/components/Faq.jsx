import React from 'react'
import faqimg from '../assets/faq.png'
function Faq() {
  return (
    <div className="mt-16">
        <main className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl font-bold mb-4">Welcome, Let's Talk About Our Ecobazar</h1>
          <div className="space-y-4 h-96 cursor-pointer"  style={{overflowY:"auto", scrollbarWidth:"none"}}>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="font-semibold text-lg">In elementum est a ante sodales iaculis.</h2>
              <p className="mt-2 text-gray-600">
                Maecenas aliquet velit tellus at accumsan. Donec eros eros, blandit vitae ornare vitae, viverra ac orci. Vivamus ornare commodo ante, at commodo felis congue vitae.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="font-semibold text-lg">Etiam lobortis massa eu nibh tempor elementum.</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros id tempus accumsan.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="font-semibold text-lg">In elementum est a ante sodales iaculis.</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros id tempus accumsan.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="font-semibold text-lg">Aenean quis quam nec lacus semper dignissim.</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros id tempus accumsan.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="font-semibold text-lg">Nulla tincidunt eros id tempus accumsan.</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros id tempus accumsan.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 mt-8 lg:mt-0 h-96">
          <img src={faqimg} alt="Ecobazar Image" className="w-2/3 h-auto rounded-md ml-28" />
        </div>
      </div>
    </main>
    </div>
  )
}

export default Faq