import React from 'react'

const ButtonText = ({onClick, children}) => {
return (
    <button 
        onClick={onClick}
        className='relative border-1 border-[#fff] bg-transparent p-2 font-poppins font-semibold rounded-md md:text-[15px] text-[10px] text-[#fff]
            transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fff] before:transition-transform before:duration-300
            hover:text-[#000] before:hover:scale-x-100'
    >
        {children}
    </button>
)
}

export default ButtonText
