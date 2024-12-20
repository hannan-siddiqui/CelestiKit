import React from "react";

const PortfolioBox = ({ data }) => {
  return (
    <div className="morphic pb-5 rounded-xl w-[350px] h-[300px]   text-white flex flex-col justify-start items-start" >
      
      <div className="p-1 rounded-t-xl overflow-hidden w-[348px] h-[210px] border-b-[1px] border-white ">
        <img className="rounded-t-[5px] w-full h-full object-top" src={data.image} alt="" />
      </div>

      <div className="mt-2 pl-14 text-lg font-bold" >{data.techstack.join(", ")}</div>

      <div className="mt-4 flex justify-between items-center font-bold text-xl pl-14">
        
        <a href={data.url} target="__blank"><button className= "hover:text-2xl hover:font-thin border border-white hover:border-[2px]  bg-gradient-to-r from-blue-700 to-red-300 hover:text-black rounded-xl w-[130px] h-[35px] transition-all ease-in-out duration-500" >
        Preview</button></a> 

        <button className="hover:text-2xl hover:font-thin border border-white hover:border-[2px] bg-gradient-to-r from-red-700 to-red-200  hover:text-black rounded-xl ml-4 b w-[130px] h-[35px] transition-all ease-in-out duration-500">
        Buy now</button>

      </div>
    
    </div>
  );
};

export default PortfolioBox;
