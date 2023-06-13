// import { useState } from "react";

// export default function Accordion(FaqProps) {

   
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <div onClick={() => setExpanded(!expanded)} className="flex flex-col p-3 border-b cursor-pointer ">
//             <div className="flex flex-row items-center">
//                 <p className={`custom-font text-xl uppercase flex-auto ${expanded ? "font-black" : "font-normal"}`}>{FaqProps.title}</p>
//                 <img className="flex-none w-3" src="/Assets/icon-arrow-down.svg" alt="arrow down" />
//             </div>
//             <div className={`transition-max-height text-lg duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-20" : "max-h-0"}`}>
//                 <p>{FaqProps.desc}</p>
//             </div>
//         </div>
//     );
// }