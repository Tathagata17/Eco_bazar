import React from 'react';
import { ArrowRight } from 'lucide-react';

function ImageWithOverlay({img,text}) {
  return (
    <div className="relative w-96 h-96">
      <img src={img} alt="ad" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start flex-col">
        <div className="text-white  p-2">{text.text}</div>
        <div className="text-white text-3xl font-bold p-2">{text.text2}</div>
        <div className="text-white text-3xl font-bold p-2">{text.text3}</div>
        <div className="p-2">
            <button className="bg-white flex w-32 h-8 rounded-xl justify-center items-center gap-1">
                <p className='text-green-700 text-sm '>Shop Now</p>
                <ArrowRight color="#15803D"/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default ImageWithOverlay;
