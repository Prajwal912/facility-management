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
    <div className="p-3 w-fit">
      <div className="flex">
        <div
          className="z-50 flex relative w-8 h-[1.3rem] flex-col justify-between items-center cursor-pointer"
          onClick={() => {
            setOpen(!open);
            setHideCaro(!open)
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "hidden rotate-45 translate-y-3.5" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "hidden w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "hidden -rotate-45 -translate-y-3.5" : ""
              }`}
          />
          {open && <div className="w-fit">
            <img src="/assets/greater.png" alt="" />
          </div>}
        </div>

        <div className="flex relative">
        <button className={`flex px-6 py-[0.10rem] border-[#C4C4C4] bg-[#E7EDFE] rounded-[1rem] border-2 mr-2 sm:ml-3`}>
           Products <span className="my-[0.6rem] mx-2"><img src="/assets/downarrow.png" className="h-[9px]" alt="" /></span>
        </button>
        <input  type="text"
                    className="absolute left-[126px] top-[1px] z-[-1] block py-1 px-10 text-purple-700 bg-white border rounded-[1rem] focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 w-[400px]"
                    placeholder="Search by Products and Services"
                />
       <div className="absolute top-2 right-[-21rem]"><img src="/assets/search.png" alt="" /></div>

        </div>



      </div>

      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
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
