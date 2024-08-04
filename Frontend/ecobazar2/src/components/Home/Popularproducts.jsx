import React from "react";
import Popularproductcard from "../Cards/popularproductscard/Popularproductcard";

function Popularproducts() {
  const arr =[1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="mt-2 grid grid-cols-5 gap-3 ml-32 mr-32">
      {arr.map((item, index) => {return(<Popularproductcard key={index} />)}
    )}
    </div>
  );
}

export default Popularproducts;

