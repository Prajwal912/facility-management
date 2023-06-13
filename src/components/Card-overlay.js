import React from 'react'

const CardOverlay = ({title}) => {
    return (
        <>
            <div className=" w-[110px] h-[51px] bg-[#C4C4C4] flex justify-center items-center text-xs mx-1 text-center">
                {title}
            </div>
        </>
    )
}

export default CardOverlay;
