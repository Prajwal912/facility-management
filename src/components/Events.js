import React from 'react'

const Events = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
        <div className="flex">
            <p className='bg-[#2398F6] px-[15px] py-[5px] text-[white] rounded-[4px] mr-4'>New</p>
            <p className='bg-[#2398F6] px-[15px] py-[5px] text-[white] rounded-[4px]'>Scheduled</p>
          </div>

          <div className="flex">
            <p className='mr-4'>Requirement of 2000 Diodes at Nashik plant</p>
            <div className="rounded-[4px]">
                <span className='flex flex-col justify-center items-center'>
                <span>Nov</span>
                <span>18</span>
                </span>
             
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Events
