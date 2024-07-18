<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)

interface AuthButtonProps {
  label: string,
  isLoading: boolean
}

<<<<<<< HEAD
const AuthButton: React.FC<AuthButtonProps> = ({ label, isLoading }) => {
  return (
    <button className='p-2 bg-primary text-white rounded-[12px] font-[400] text-[20px]'>
      {isLoading ? (
        `Loading....`
      ) : (
        <span className=''>{label}</span>
      )}
    </button>
  )
}

export default AuthButton
=======
const AuthButton: React.FC<AuthButtonProps> = ({ label, isLoading }) => (
  <button className="p-2 bg-primary flex items-center justify-center text-white rounded-[12px] font-[400] text-[20px]">
    {isLoading ? (
      <ThreeDots
        visible
        height="30"
        width="50"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    ) : (
      <span className="">{label}</span>
    )}
  </button>
);

export default AuthButton;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
