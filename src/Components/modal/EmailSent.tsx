<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)

interface emailProps {
    email?: string
}

<<<<<<< HEAD
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
=======
const EmailSent: React.FC<emailProps> = ({ email }) => (
  <div className="w-full p-4 z-40 absolute bg-black/50 h-full top-0 flex items-center justify-center">
    <div className="w-full p-4   lg:w-1/3 h-1/4 bg-white rounded-[12px] flex items-center justify-center">
      <h1 className="font-outfit text-[18px] font-[600] text-center">
        Verify your email on
        <span className="font-[300]">{email}</span>
      </h1>
    </div>
  </div>

);

export default EmailSent;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
