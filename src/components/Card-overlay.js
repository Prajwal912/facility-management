import React from 'react'

const CardOverlay = ({title}) => {
    return (
        <>
            <div className=" w-[110px] h-[51px] bg-[#C4C4C4] flex justify-center items-center text-xs mx-1 text-center
                sm:w-[25%] sm:h-[150px] sm:text-[20px] sm:mx-auto">
                {title}
            </div>
        </>
    )
}

export default CardOverlay;
