import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import Accordion from './components/accordion';
import Auctions from './components/Auctions';
import CardOverlay from './components/Card-overlay';
import Events from './components/Events';



function App() {

  let cardsArr = Array.from({ length: 12 }, (value, index) => index);
  let auctionArr = Array.from({ length: 12 }, (value, index) => index);
  let featureArr = Array.from({ length: 15 }, (value, index) => index);
  let serviceArr = Array.from({ length: 8 }, (value, index) => index);
  let productArr = Array.from({ length: 6 }, (value, index) => index);
  let overlayArr = Array.from({ length: 3 }, (value, index) => index);
  let featuredArr = Array.from({ length: 1 }, (value, index) => index);
  

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

      <div className='mx-4 my-3'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Trending Auctions</p>
          <p className='text-[#4D79EB] cursor-pointer	'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of auctions.</div>
        <div className='flex flex-wrap ml-[12px]'>
          {auctionArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>



      <div className='mx-4 my-3'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Products</p>
          <p className='text-[#4D79EB] cursor-pointer	'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of products.</div>
        <div className='flex flex-wrap ml-[12px]'>
          {featureArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>



      <div className='mx-4 my-3'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Services</p>
          <p className='text-[#4D79EB] cursor-pointer'>View all</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of services.</div>
        <div className='flex flex-wrap ml-[12px]'>
          {serviceArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>


{/* product listing page */}
      <div className='mx-4 my-3'>
        <div className='flex flex-wrap ml-[12px]'>
          {productArr?.map(i => {
            return <Auctions />
          })}
        </div>
      </div>





{/* overlay div */}
      <div className='mx-4 my-3'>
        <div className='flex flex-wrap ml-[12px]'>
          {overlayArr?.map(i => {
            return <CardOverlay />
          })}
        </div>
      </div>

{/* featured events */}
<div className='mx-4 my-3'>
        <div className='ml-2 flex justify-between mx-4 mt-3'>
          <p className='font-medium text-[22px]'>Featured Events</p>
        </div>
        <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">See what's popular across thousands of Events.</div>
        <div className='flex flex-wrap ml-[12px]'>
          {featuredArr?.map(i => {
            return <Events />
          })}
        </div>
      </div>

    </>
  );
}

export default App;