import React, { useState } from "react";
import Searchcard from "./Cards/Searchcard/Searchcard";

function Search() {
  const [searchdata,setsearchdata]=useState([]);
  const [show ,setshow]=useState(false);
  const handleshow=()=>{
    if(searchdata.length===0||show===true)
    {
      setshow(false);
    }
    else{setshow(true);}
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center relative font-poppins">
      <div>
        <form action="" className="flex flex-row">
          <input
            className="h-8 p-2 text-gray-700 w-96 border border-gray-300 focus:outline-none"
            placeholder="Search"
            type="text"
            onClick={handleshow}
            style={{
              borderTopLeftRadius: "0.5rem",
              borderBottomLeftRadius: "0.5rem",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <button
            className="h-8 w-32 text-white hover:opacity-90"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
              backgroundColor: "#00B207",
            }}
          >
            Search
          </button>
        </form>
      </div>
      {show && (
        <div className=" bg-slate-50 w-full mt-4 py-2 rounded-lg h-auto justify-center items-center shadow-lg absolute top-full z-10 ">
          {searchdata.map((item,index)=>{
            return(<Searchcard data={item} key={index}/>)
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
