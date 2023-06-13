import React from 'react'

const Events = () => {
  return (
    <div className='w-fit mr-4 sm:mr-8'>
  
        <div className="px-[25px] py-[10px] shadow-xl w-[390px]">

        <div className="flex">
            <p className='bg-[#2398F6] px-[15px] py-[5px] text-[white] rounded-[4px] mr-4'>New</p>
            <p className='bg-[#2398F6] px-[15px] py-[5px] text-[white] rounded-[4px]'>Scheduled</p>
          </div>

          <div className="flex">
            <p className='mr-[30px] font-medium mt-[13px]'>Requirement of 2000 Diodes at Nashik plant</p>
            <div className="rounded-[4px]">
                <span className='flex flex-col justify-center items-center'>
                <span className='bg-[#2398F6] px-[13px] text-[white] rounded-t-[16px]	'>Nov</span>
                <span className="text-[#2398F6]">18</span>
                </span>
            </div>
          </div>

          <p className="text-[#3B3B3B] text-[14px] mb-[7px]">
             Sat, 02:PM onwards
          </p>

          <div className="flex mb-[10px]">
             <img src="/assets/circle.png" className='h-[40px] mt-[3px]' alt="" />
            <div className='ml-[10px]'>
                <p className='text-[14px] text-[#1A1A1A] font-medium'>Andrew Smith</p>
                <p className='text-[14px]'>Global foundries</p>
            </div>
          </div>

          <div className='flex'>
          <img src="/assets/frame.png" alt="" />
          <span className='text-[#1DDDC7] ml-[15px]'>one on one</span>
          </div>

        </div>
        
     
    </div>
  )
}

export default Events
