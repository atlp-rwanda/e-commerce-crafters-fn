import React from 'react';

interface AuthButtonProps {
  label: string,
  isLoading: boolean
}

const AuthButton: React.FC<AuthButtonProps> = ({ label, isLoading }) => (
  <button className="p-2 bg-primary text-white rounded-[12px] font-[400] text-[20px]">
    {isLoading ? (
      'Loading....'
    ) : (
      <span className="">{label}</span>
    )}
  </button>
);

export default AuthButton;
