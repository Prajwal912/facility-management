import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-evenly pb-2  border-b-2'>
        <p className='sm:text-[20px] text-[16px] sm:mx-[60px]'>90,000+ results</p>
        <img src="/assets/burger.png" alt="" className='sm:h-[28px] h-[26px]' />
        <img src="/assets/search.png" alt="" className='h-[23px] mt-[2px]'/>
        <span className='flex sm:text-[18px] text-[16px]'><img src="/assets/sort.png" alt="" className='sm:h-[18px] h-[19px]  mt-[4px] mx-[10px] sm:mx-[20px]' />Sort</span> 
        <span className='flex sm:text-[18px] text-[16px]'><img src="/assets/filter.png" alt="" className='sm:h-[18px] h-[16px] mt-[4px] mx-[10px] sm:mx-[20px]'/>Filter</span> 

    </div>
  )
}

export default Menu
