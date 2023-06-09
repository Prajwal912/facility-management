import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-evenly'>
        <p>90,000+ results</p>
        <img src="/assets/burger.png" alt="" className='h-[28px]' />
        <img src="/assets/search.png" alt="" className='h-[26px]'/>
        <span className=''><img src="/assets/sort.png" alt="" className='h-[26px]' />Sort</span> 
        <span><img src="/assets/filter.png" alt="" className='h-[26px]'/>Filter</span> 
        
    </div>
  )
}

export default Menu
