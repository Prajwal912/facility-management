import React, { useState } from 'react'

const Navtabs = () => {

    const [active, setActive] = useState(1);
    return (

        <>
            <div className='flex justify-between max-w-xs mx-auto border-b-2 mt-[0.8rem]'>
                <p className={`${active === 1 && "border-b-4 text-[#3665F3] border-[#3665F3]"} pb-[5px] font-medium cursor-pointer`} onClick={() => setActive(1)}>All</p>
                <p className={`${active === 2 && "border-b-4 text-[#3665F3] border-[#3665F3]"} pb-[5px] font-medium cursor-pointer`} onClick={() => setActive(2)}>Auction</p>
                <p className={`${active === 3 && "border-b-4 text-[#3665F3] border-[#3665F3]"} pb-[5px] font-medium cursor-pointer`} onClick={() => setActive(3)}>Buy it Now</p>
            </div>
        </>
    )
}

export default Navtabs
