import React, { lazy, Suspense } from "react";
import banner1 from "../assets/Bannar.png";
import banner2 from "../assets/Bannar2.png";
import banner3 from "../assets/Bannar3.png";
import feature from "../assets/Featured.png";
import Popularcategories from "./Home/Popularcategories";
//import Popularproducts from "./Home/Popularproducts";
import Adfordiscount from "./Cards/Adfordiscount";

import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import Imageoverlay from "./Cards/Imageoverlay";
import HotDeals from "./Home/HotDeals";
import discountbanner from "../assets/Discount Bannar (1).png";
import FeaturedProduct from "./Home/FeaturedProduct";
import Newscards from "./Cards/Newscards";
import Customertestimonialcard from "./Cards/Customertestimonialcard";
import { MoveRight } from "lucide-react";
import Loader from "./loader/Loader";

const Popularproducts = lazy(() => import("./Home/Popularproducts"));
const obj = {
  text: "BEST DEALS",
  text2: "Sale Of The Month",
  text3: "18:20:30:00",
};

function Home() {
  return (
    <>
      <div className="mt-24">
        <div className="flex gap-3">
          <img
            className="w-1/2 h-1/2 ml-32 mt-4 relative"
            src={banner1}
            alt="banner"
          />
          <div className="flex gap-1 absolute ml-48 mt-96 bg-green-600 h-8 w-32 px-2 justify-center items-center py-2 text-white font-semibold rounded-xl shadow hover:opacity-80">
            <div>Shop Now</div>
            <div>
            <MoveRight  size={16} />
            </div>
          </div>
          <div className="grid gap-1">
            <img className="w-96 h-52 mt-4" src={banner2} alt="banner" />
            <img className="w-96 h-56" src={banner3} alt="banner" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="h-28 w-full ml-32 mr-32" src={feature} alt="feature" />
      </div>
      <div>
        <h2 className="ml-32 text-gray-700 font-semibold text-2xl">
          Popular categories
        </h2>
        <br />
        <div>
          <Popularcategories />
        </div>
      </div>
      <div className="mt-2">
        <h2 className="ml-32 text-gray-700 font-semibold text-2xl">
          Popular Items
        </h2>
        <Suspense fallback={<Loader />}>
          <Popularproducts />
        </Suspense>
      </div>
      <div className="mt-4 flex gap-1 ml-32 mr-32">
        <Imageoverlay img={ad1} text={obj} />
        <Imageoverlay img={ad2} text="ad2" />
        <Imageoverlay img={ad3} text="ad3" />
      </div>
      <div className="mt-3">
        <h2 className="ml-32 text-gray-700 font-semibold text-2xl ">
          Hot Deals
        </h2>
        <HotDeals />
      </div>
      <div className="mt-4">
        <Adfordiscount img={discountbanner} />
      </div>
      <div className="mt-4 ml-32 mr-32">
        <h2 className=" text-gray-700 font-semibold text-2xl ">
          Featured Products
        </h2>
        <FeaturedProduct />
      </div>
      <div className="mt-4 ml-32 mr-32">
        <h2 className=" text-gray-900 text-2xl font-semibold text-center">
          Latest News
        </h2>
        <div className="flex gap-2">
          <Newscards />
          <Newscards />
          <Newscards />
        </div>
      </div>
      <div className="ml-32 mr-32 mt-7">
        <h2 className=" text-gray-700 font-semibold text-2xl">
          Customer Testimonials
        </h2>
      </div>
      <div className="bg-neutral-200 h-96 flex items-center justify-center ">
        <div className="ml-32  mr-32 flex gap-1">
          <Customertestimonialcard />
          <Customertestimonialcard />
          <Customertestimonialcard />
        </div>
      </div>
    </>
  );
}

export default Home;
