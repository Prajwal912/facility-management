import React from 'react'
import Navtabs from './components/Navtabs';
import Menu from './components/Menu';
import Auctions from './components/Auctions';
import Capsule from './components/Capsule';
import FacultyText from './components/FacultyText';



const Products = () => {
    let productArr = Array.from({ length: 6 }, (value, index) => index);
    const ctaData = ["All", "Maintainance services", "Work wear & Uniforms"]

  return (
    <>
<div className='flex justify-center'>
        <FacultyText />
      </div>


 <div className='flex ml-4 sm:ml-0 sm:justify-center flex-wrap my-2 border-b-2 pb-2'>
        {ctaData?.map(i => {
          return <Capsule title={i} />
        })}
      </div>

      <Menu />
      <Navtabs />

      <div className='mx-4 my-3'>
        <div className='flex flex-wrap ml-[12px]'>
          {productArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>

    </>
  )
}

export default Products
