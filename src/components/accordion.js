import { useState } from "react";

export default function Accordion({data}) {

   
    const [expanded, setExpanded] = useState(false);
    console.log(data)

    return (
        <div onClick={() => setExpanded(!expanded)} className="flex flex-col p-3 border-b cursor-pointer ">
            <div className="flex flex-row items-center">
                <p className={`custom-font text-sm sm:text-lg flex-auto`}>
                    {data.title}
                    </p>
                <img className={`flex-none ${expanded && "rotate-180"}  duration-300 ease-in-out`} w-3 src="/Assets/icon-arrow-down.svg" alt="arrow down" />
            </div>
            <div className={`transition-max-height text-sm sm:text-lg duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-20" : "max-h-0"}`}>
                <p>{data.desc}</p>
            </div>
        </div>
    );
}