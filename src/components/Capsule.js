import React from 'react'

const Capsule = ({title}) => {
    return (
        <button className={`my-2 px-6 py-1 border-[#C4C4C4] ${title == "All" && "bg-[#E7EDFE]"} rounded-full border-2 mr-2 sm:ml-3`}>
            {title}
        </button>
    )
}

export default Capsule
