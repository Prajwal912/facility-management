import React from 'react'

const Categories = ({data}) => {
   
  return (
   <div className='w-fit'>
      <div className="m-2 w-[120px] h-[100px] bg-[#F5F5F5] px-4 py-3 rounded-xl">
            <img src={data.img} className='mx-auto ' />
            <p className='text-center leading-5 my-2 text-sm'>{data.title}</p>
        </div>
   </div>
  )
}

export default Categories
