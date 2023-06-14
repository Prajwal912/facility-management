import React, { useState } from "react";
import Accordion from "./accordion";

const Header = ({ setHideCaro }) => {
  const [open, setOpen] = useState(false);

  const accordionData = [
    {
      title: "Maintainance services",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el",
    },
    {
      title: "Work wear & Uniforms",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el",
    },
    {
      title: "Custodial services",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el",
    },
    {
      title: "Facility management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el",
    },
    {
      title: "Maintainance services",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into el",
    },
  ];

  return (
    <div className="p-3">
      <div className="flex w-full justify-between items-center">
        <div
          className="z-50 flex relative w-8 h-[1.3rem] flex-col justify-between items-center cursor-pointer"
          onClick={() => {
            setOpen(!open);
            setHideCaro(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "hidden rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "hidden w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "hidden -rotate-45 -translate-y-3.5" : ""
            }`}
          />
          {open && (
            <div className="w-fit">
              <img src="/assets/greater.png" alt="" />
            </div>
          )}
        </div>

        <div className="flex relative">
          <button
            className={`absolute flex px-3 py-[6px] border-[#C4C4C4] bg-[#E7EDFE] rounded-[1rem] border mr-2 sm:ml-3 items-center space-x-1`}
          >
            <span className="text-sm">Products</span>
            <img src="/assets/vector.svg" alt="" className="w-3" />
          </button>
          <input
            type="text"
            className="ml-16 sm:ml-20 py-1 px-10 text-purple-700 bg-white border rounded-r-full  focus:outline-none focus:ring-0 w-52 sm:w-[400px]"
            placeholder="Search by Products and Services"
          />
          <img
            src="/assets/search.png"
            alt=""
            className="absolute right-4 top-2"
          />
        </div>

        <div className="flex items-center sm:space-x-2">
          <img src="/assets/filter.png" alt="" />
          <span>Filter</span>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
          open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md fixed-acc`}
      >
        <div className="mt-16 px-5 overflow-x-hidden w-fit">
          {accordionData?.map((item) => {
            return <Accordion data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
