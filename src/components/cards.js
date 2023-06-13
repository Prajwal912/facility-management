import React from 'react'

const Cards = () => {
  return (
   <>
        <div className="m-2 w-[120px] bg-[#F5F5F5] px-4 py-3 rounded-xl">
            <img src="/assets/clarity_building-line.png" className='mx-auto' />
            <p className='text-center leading-5 my-2 text-sm'>Facility Management</p>
        </div>
        <div className="m-2 w-[120px] bg-[#F5F5F5] px-4 py-3 rounded-xl">
            <img src="/assets/logistic.png" className='mx-auto' />
            <p className='text-center leading-5 my-2 text-sm'>Logistic</p>
        </div>
   </>
  )
}

export default Cards
