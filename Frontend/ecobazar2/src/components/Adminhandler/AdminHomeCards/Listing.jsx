import React from "react";

function Listing() {
  const category = [
    "Fresh Fruit",
    "Vegetables",
    "Cooking",
    "Snacks",
    "Beverages",
    "Beauty & Health",
    "Bread & Bakery",
  ];
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-2 text-gray-600 font-bold text-2xl ">Listing</h1>
      <div className="flex gap-8 w-full p-4">
        <aside className="w-full">
          <div className=" w-full flex flex-col justify-center items-center   h-96 border-2 border-blue-200 border-dashed">
            Drop your Images 
            <input type="file"/>
          </div>
        </aside>
        <section className="flex flex-col gap-2">
          <form>
            <div className="flex gap-4 w-full mt-2">
              <input
                type="text"
                placeholder="Product Name"
                className="h-10 outline-none rounded-md px-2 py-1"
              />
              <input
                type="text"
                placeholder="Price"
                className="h-10 outline-none rounded-md px-2 py-1"
              />
              <select className="h-10 outline-none rounded-md px-2 py-1">
                <option>INR</option>
                <option>USD</option>
                <option>YEN</option>
              </select>
            </div>
            <div className="flex gap-4 w-full mt-4">
              <input
                type="text"
                placeholder="Quantity"
                className="h-10 outline-none rounded-md px-2 py-1"
              />
              <input
                type="text"
                placeholder="weight"
                className="h-10 outline-none rounded-md px-2 py-1"
              />
            </div>
            <div className="flex gap-4 w-full mt-4">
              <select
                type="text"
                placeholder="Quantity"
                className="h-10 outline-none rounded-md px-2 py-1"
              >
                {category.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mt-32">
              <button
                type="submit"
                className="hover:opacity-80 h-10 w-3/4 py-1"
                style={{
                  backgroundColor: "#00B207",
                  color: "white",
                  borderRadius: "100rem",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Listing;
