import logo from "./logo.svg";
import "./App.css";

import Accordion from "./components/accordion";
import Auctions from "./components/Auctions";
import CardOverlay from "./components/Card-overlay";
import Events from "./components/Events";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Carousel from "./components/Carousel";
import { useState } from "react";
import Shop from "./Shop";
import Products from "./Products";

function App() {
  let auctionArr = Array.from({ length: 8 }, (value, index) => index);
  let featureArr = Array.from({ length: 9 }, (value, index) => index);
  let serviceArr = Array.from({ length: 8 }, (value, index) => index);
  let featuredArr = Array.from({ length: 3 }, (value, index) => index);
  let overlayArr = ["Request Anything", "Create Events", "Auction Items"];

  const categoriesData = [
    {
      img: "/assets/clarity_building-line.png",
      title: "Facility Management",
    },
    {
      img: "/assets/logistic.png",
      title: "Logistic",
    },
    {
      img: "/assets/construction.png",
      title: "Construction",
    },
    {
      img: "/assets/chemicals.png",
      title: "chemicals",
    },
  ];

  const [hideCaro, setHideCaro] = useState(false);
  const [activePage, setActivePage] = useState(1);

  return (
    <>
      <Header setHideCaro={setHideCaro} />
      {activePage === 2 && <Shop />}
      {activePage === 3 && <Products />}
      {activePage === 1 && (
        <>
          {/* overlay div */}
          <div className="mx-4 mb-20 mt-5">
            <div className="flex ml-[12px]">
              {overlayArr?.map((item) => {
                return <CardOverlay title={item} />;
              })}
            </div>
          </div>

          {!hideCaro && <Carousel />}

          {/* categories */}
          <div className="mx-4 mb-10 mt-5">
            <div className="ml-2 flex justify-between mx-4 mt-3">
              <p className="font-medium text-[22px]">
                Explore Popular Categories
              </p>
              <p className="text-[#4D79EB] cursor-pointer">View all</p>
            </div>
            <div className="flex overflow-auto mt-5">
              {categoriesData?.map((i) => {
                return <Categories data={i} />;
              })}
            </div>
          </div>

          <div className="mx-4 mb-10 mt-5">
            <div className="ml-2 flex justify-between mx-4 mt-3">
              <p className="font-medium text-[22px]">Trending Auctions</p>
              <p className="text-[#4D79EB] cursor-pointer	">View all</p>
            </div>
            <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">
              See what's popular across thousands of auctions.
            </div>
            <div className="flex overflow-auto sm:overflow-hidden sm:flex-wrap ml-[12px]">
              {auctionArr?.map((i) => {
                return <Auctions />;
              })}
            </div>
          </div>

          <div className="mx-4 mb-10 mt-5">
            <div className="ml-2 flex justify-between mx-4 mt-3">
              <p className="font-medium text-[22px]">Featured Products</p>
              <p className="text-[#4D79EB] cursor-pointer	">View all</p>
            </div>
            <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">
              See what's popular across thousands of products.
            </div>
            <div className="flex sm:overflow-none sm:flex-wrap  overflow-auto ml-[12px]">
              {featureArr?.map((i) => {
                return <Auctions />;
              })}
            </div>
          </div>

          <div className="mx-4 mb-10 mt-5">
            <div className="ml-2 flex justify-between mx-4 mt-3">
              <p className="font-medium text-[22px]">Featured Services</p>
              <p className="text-[#4D79EB] cursor-pointer">View all</p>
            </div>
            <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">
              See what's popular across thousands of services.
            </div>
            <div className="flex overflow-auto sm:overflow-hidden sm:flex-wrap ml-[12px]">
              {serviceArr?.map((i) => {
                return <Auctions />;
              })}
            </div>
          </div>

          {/* featured events */}
          <div className="mx-4 mb-20 mt-5">
            <div className="ml-2 flex justify-between mx-4 mt-3">
              <p className="font-medium text-[22px]">Featured Events</p>
            </div>
            <div className="ml-2 text-[#5F5F5F] text-[17px] mb-5">
              See what's popular across thousands of Events.
            </div>
            <div className="flex overflow-auto ml-[12px]">
              {featuredArr?.map((i) => {
                return <Events />;
              })}
            </div>
          </div>
        </>
      )}

      {/* Pagination */}

      <div className="flex justify-center mb-6">
        <ul class="inline-flex items-center -space-x-px">
          <li class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          onClick={()=> {activePage > 1 && setActivePage(activePage-1)}}
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
          <li class={`px-3 py-2 leading-tight ${activePage === 1 ? "text-blue-600 bg-blue-100" : "text-gray-600"} border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 cursor-pointer`}
          onClick={() => setActivePage(1)}
          >
            1
          </li>
          <li class={`px-3 py-2 leading-tight ${activePage === 2 ? "text-blue-600 bg-blue-100" : "text-gray-600"} bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 cursor-pointer`}
          onClick={() => setActivePage(2)}
          >
            2
          </li>
          <li class={`px-3 py-2 leading-tight ${activePage === 3 ? "text-blue-600 bg-blue-100" : "text-gray-600"} bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 cursor-pointer`}
          onClick={() => setActivePage(3)}
          >
            3
          </li>
          <li class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          onClick={()=> {activePage < 3 && setActivePage(activePage+1)}}
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
