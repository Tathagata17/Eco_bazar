import React, { useState } from "react";
import tomtom from "../assets/tomatoes.jpg";

function Productdetail() {
  const [isactive, setactive] = useState(1);
  const [quantity, setquantity] = useState(1);
  const handlequantity=(value)=>{
    if(value==="+")
    {
      setquantity((prev)=>prev<10?prev+1:1);
    }
    else
    {
      setquantity((prev)=>prev<2?1:prev-1)
    }
  }
  const render = () => {
    switch (isactive) {
      case 1:
        return (
          <div className="text-gray-700">
            <p>
              hey i am desc Sed commodo aliquam dolor, quis pharetra libero
              venenatis vel. Nam malesuada tincidunt nisi, nec tincidunt libero
              tempor in. Cras ut nisl eu sapien vestibulum pharetra. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Mauris auctor ligula in varius fermentum.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="text-gray-700">
            <p>
              hey i am add info Sed commodo aliquam dolor, quis pharetra libero
              venenatis vel. Nam malesuada tincidunt nisi, nec tincidunt libero
              tempor in. Cras ut nisl eu sapien vestibulum pharetra. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Mauris auctor ligula in varius fermentum.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-gray-700">
            <p>
              hey i am customer info Sed commodo aliquam dolor, quis pharetra
              libero venenatis vel. Nam malesuada tincidunt nisi, nec tincidunt
              libero tempor in. Cras ut nisl eu sapien vestibulum pharetra.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Mauris auctor ligula in varius fermentum.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
          </div>
        );
      default:
        return null;
        break;
    }
  };
  return (
    <div className="mt-36">
      <section className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex gap-8">
          <div className="flex-none w-1/3">
            <img
              src={tomtom}
              alt="Product Image"
              className="w-full rounded-lg mb-4"
            />
            <div className="grid grid-cols-4 gap-2">
              <img
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-full rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-full rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-full rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Product Thumbnail"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-2">Chinese Cabbage</h1>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-gray-600">(1 Review)</span>
            </div>
            <div className="text-xl text-green-500 font-bold mb-4">
              $17.28 <span className="line-through text-gray-400">$48.00</span>{" "}
              <span className="text-red-500">64% OFF</span>
            </div>
            <div className="mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                In Stock
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Cras eget facilisis nulla. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam.
            </p>
            <div className="flex items-center mb-4">
              <button
                className=" text-white px-4 py-2 rounded-lg flex items-center gap-2"
                style={{ backgroundColor: "#00B207" }}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
              <div className="flex items-center ml-4">
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-lg" onClick={()=>{handlequantity("-")}}>
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => {
                    if (isNaN(e.target.value)||e.target.value>10) {
                      setquantity(1)
                    }
                    else
                    {
                      setquantity(e.target.value)
                    }
                  }}
                  className="w-12 text-center border border-gray-300 outline-none"
                />
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-lg"onClick={()=>{handlequantity("+")}}>
                  +
                </button>
              </div>
            </div>
            <div className="text-gray-600 mb-4">
              <p>
                Brand: <span className="font-bold">Ecobazar</span>
              </p>
              <p>
                Category: <span className="font-bold">Vegetables</span>
              </p>
              <p>
                Tags:{" "}
                <span className="font-bold">
                  Vegetables, Healthy, Chinese Cabbage, Green Cabbage
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="border-b border-gray-200 mb-4">
            <ul className="flex space-x-8">
              <li
                onClick={() => setactive(1)}
                className={`${
                  isactive === 1 ? `border-b-2 border-green-500 pb-2` : ``
                } hover:cursor-pointer`}
              >
                <a
                  className={`text-gray-600 ${
                    isactive === 1 ? `text-green-500 ` : `text-gray-600`
                  } `}
                >
                  Description
                </a>
              </li>
              <li
                onClick={() => setactive(2)}
                className={`${
                  isactive === 2 ? `border-b-2 border-green-500 pb-2` : ``
                } hover:cursor-pointer`}
              >
                <a
                  className={`text-gray-600 ${
                    isactive === 2 ? `text-green-500` : `text-gray-600`
                  }`}
                >
                  Additional Information
                </a>
              </li>
              <li
                onClick={() => setactive(3)}
                className={`${
                  isactive === 3 ? `border-b-2 border-green-500 pb-2` : ``
                } hover:cursor-pointer`}
              >
                <a
                  className={`text-gray-600 ${
                    isactive === 3 ? `text-green-500` : `text-gray-600`
                  }`}
                >
                  Customer Feedback
                </a>
              </li>
            </ul>
          </div>
          {render()}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/200"
                alt="Product Image"
                className="w-full h-32 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Green Apple</h3>
              <div className="flex items-center justify-between">
                <p className="text-green-500 font-bold">
                  $14.99{" "}
                  <span className="line-through text-gray-400">$20.99</span>
                </p>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/200"
                alt="Product Image"
                className="w-full h-32 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Charisse Cabbage</h3>
              <div className="flex items-center justify-between">
                <p className="text-green-500 font-bold">
                  $14.99{" "}
                  <span className="line-through text-gray-400">$20.99</span>
                </p>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/200"
                alt="Product Image"
                className="w-full h-32 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Green Capsicum</h3>
              <div className="flex items-center justify-between">
                <p className="text-green-500 font-bold">
                  $14.99{" "}
                  <span className="line-through text-gray-400">$20.99</span>
                </p>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/200"
                alt="Product Image"
                className="w-full h-32 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Ladies Finger</h3>
              <div className="flex items-center justify-between">
                <p className="text-green-500 font-bold">
                  $14.99{" "}
                  <span className="line-through text-gray-400">$20.99</span>
                </p>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productdetail;
