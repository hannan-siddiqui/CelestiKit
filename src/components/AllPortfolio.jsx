import React from 'react'
import PortfolioBox from './PortfolioBox'
import p1 from '../assets/pimage.png';

const AllPortfolio = () => {

    const data = {
        image :p1,
        techstack: ["react", "tailwind", "shadcn UI" ],
        url : 'https://hannansiddiqui.vercel.app/',
    }

  return (
    <div className=' flex flex-col justify-start items-start bg-neutral-800'>
        <div className='md:ml-36 ml-10 font-bold text-2xl md:text-4xl  text-red-500'>browse all templates</div>

        <div className='md:mt-8 md:py-20 py-10 flex flex-wrap justify-center items-center gap-x-10 gap-y-9  ' >
          
            <PortfolioBox  data = {data} />
            <PortfolioBox  data = {data} />
            <PortfolioBox  data = {data} />
            <PortfolioBox  data = {data} />
            <PortfolioBox  data = {data} />
            <PortfolioBox  data = {data} />

        </div>

    </div>
  )
}

export default AllPortfolio