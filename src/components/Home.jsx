import React from "react";

import { getElements } from "./Util";

const Home = () => {
  const data = getElements();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-6 px-4 ">

        <div className="mt-6 text-2xl text-neutral-700 text-center">
          by the Darth Vader
        </div>

        <div
         className="text-2xl text-center  bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent "
        //  className="mx-auto text-centre md:text-5xl text-2xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent"
        >
          portfolio and website templates
        </div>

        <div className="text-xl text-center text-white">
          browse, clone and customize your websites
        </div>

        <div className="w-[80%] mt-10 h-[1px] bg-red-800 "></div>

        <div className="md:mt-20 mt-5 p-10 md:text-2xl text-lg  text-neutral-300 text-center" >
        Create stunning websites with our high-quality, customizable components, including headers, buttons, forms, and more. Whether you need individual elements or a fully personalized portfolio website, we deliver fast, affordable solutions using modern technologies like React and TailwindCSS. Build your dream site today with our expert designs!
        </div>

      </div>
    </>
  );
};

export default Home;
