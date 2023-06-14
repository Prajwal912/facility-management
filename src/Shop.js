import React from 'react'
import Cards from './components/cards';
import logo from './logo.svg';

const Shop = () => {
    let cardsArr = Array.from({ length: 8 }, (value, index) => index);

  return (
    <>
         <div className='mx-2 my-3'>
        <div className='ml-2'>Recent</div>
        <div className='flex flex-wrap'>
          <Cards />
        </div>
        <div className='mt-6 ml-2'>All Categories</div>
        <div className='flex flex-wrap'>
          {cardsArr?.map(i => {
            return <Cards />
          })}
        </div>
      </div>
    </>
  )
}

export default Shop
