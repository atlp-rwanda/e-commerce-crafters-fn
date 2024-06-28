import React from 'react';

interface InputProps {
    label: string,
    type: string,
    value: string,
    placeholder: string,
    error? : boolean,

    onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({
  label, type, value, placeholder, onChange, error,
}) => {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <span className="text-[16px] font-[400] text-[#666666] font-outfit">{label}</span>
      <input onChange={handelChange} type={type} value={value} className={`p-3 border ${error ? 'border-red-500/60' : 'border-border/50'}  rounded-[12px] font-outfit outline-none placeholder:font-[400]`} placeholder={placeholder} />
    </div>
  );
};

export default Input;
