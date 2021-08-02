import React from 'react'

const Modal = ({ children }) => {

    return (
        <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto '>
            <div className='absolute top-0 left-0 z-10 w-full h-full bg-gray-400 opacity-75 ' />
            <div className='relative z-20 flex flex-col items-center justify-center p-2 my-12 bg-gray-200 border border-gray-300 border-solid rounded shadow md:p-4 md:w-2/3 md:min-w-modal '>
                <div className='w-full h-full'>{children}</div>
            </div>
        </div>
    )
}
export default Modal