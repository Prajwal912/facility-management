import logo from './logo.svg';
import './App.css';

import Accordion from './components/accordion';
import Auctions from './components/Auctions';
import CardOverlay from './components/Card-overlay';
import Events from './components/Events';
import Header from './components/Header';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import { useState } from 'react';
import Shop from './Shop';
import Products from './Products';




function App() {

  let auctionArr = Array.from({ length: 8 }, (value, index) => index);
  let featureArr = Array.from({ length: 9 }, (value, index) => index);
  let serviceArr = Array.from({ length: 8 }, (value, index) => index);
  let featuredArr = Array.from({ length: 3 }, (value, index) => index);
  let overlayArr = ['Request Anything', 'Create Events', 'Auction Items'];

  const categoriesData = [
    {
      img: "/assets/clarity_building-line.png",
      title: "Facility Management"
    },
    {
      img: "/assets/logistic.png",
      title: "Logistic"
    },
    {
      img: "/assets/construction.png",
      title: "Construction"
    },
    {
      img: "/assets/chemicals.png",
      title: "chemicals"
    }
  ]

  const [hideCaro, setHideCaro] = useState(false)
  


  return (
    <>
      <Header setHideCaro={setHideCaro} />
      <Products />
      <Shop />

       {/* overlay div */}
       <div className='mx-4 mb-20 mt-5'>
        <div className='flex ml-[12px]'>
          {overlayArr?.map(item => {
            return <CardOverlay title={item} />
          })}
        </div>
      </div>


      {!hideCaro && <Carousel />}


        {/* categories */}
        <div className='mx-4 mb-10 mt-5'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Explore Popular Categories</p>
          <p className='text-[#4D79EB] cursor-pointer'>View all</p>
        </div>
        <div className='flex overflow-auto mt-5'>
          {categoriesData?.map(i => {
            return <Categories data={i} />
          })}
        </div>
      </div>



      <div className='mx-4 mb-10 mt-5'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Trending Auctions</p>
          <p className='text-[#4D79EB] cursor-pointer	'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of auctions.</div>
        <div className='flex overflow-auto ml-[12px]'>
          {auctionArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>

      <div className='mx-4 mb-10 mt-5'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Products</p>
          <p className='text-[#4D79EB] cursor-pointer	'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of products.</div>
        <div className='flex sm:overflow-none sm:flex-wrap  overflow-auto ml-[12px]'>
          {featureArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>


      <div className='mx-4 mb-10 mt-5'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Services</p>
          <p className='text-[#4D79EB] cursor-pointer'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of services.</div>
        <div className='flex overflow-auto ml-[12px]'>
          {serviceArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>

      
     


    


      {/* featured events */}
      <div className='mx-4 mb-20 mt-5'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Events</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of Events.</div>
        <div className='flex overflow-auto ml-[12px]'>
          {featuredArr?.map(i => {
            return <Events />
          })}
        </div>
      </div>


    </>
  );
}

export default App;
