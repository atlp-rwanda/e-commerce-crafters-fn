import React from 'react'

interface emailProps {
    email?: string
}

const EmailSent: React.FC<emailProps> = ({ email }) => {
    return (
        <div className='w-full p-4 absolute bg-black/50 h-full top-0 flex items-center justify-center'>
            <div className='w-full p-4   lg:w-1/3 h-1/4 bg-white rounded-[12px] flex items-center justify-center'>
            <h1 className='font-outfit text-[20px] font-[600] text-center'>Verify your email on <span className='font-[300]'>{email}</span></h1>
            </div>
        </div>

    )
}

export default EmailSent