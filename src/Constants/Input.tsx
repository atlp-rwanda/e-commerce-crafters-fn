<<<<<<< HEAD
import React from 'react'

interface InputProps {
    label: string,
    type: string,
    value: string,
    placeholder: string,
    error? : boolean,

    onChange:  (value: string) => void
}

const Input: React.FC<InputProps> = ({label,type,value,placeholder,onChange,error}) => {
    const handelChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        onChange(e.target.value)
    }
    return (
        <div className='flex flex-col gap-[6px] w-full'>
            <span className='text-[16px] font-[400] text-[#666666] font-outfit'>{label}</span>
            <input onChange={handelChange}  type={type} value={value} className={`p-3 border ${error ? "border-red-500/60" : "border-border/50"}  rounded-[12px] font-outfit outline-none placeholder:font-[400]`} placeholder={placeholder} />
        </div>
    )
}

export default Input
=======
import React, { useState } from 'react';

interface InputProps {
  label: string,
  type: string,
  value: string,
  placeholder: string,
  error?: boolean,

  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({
  label, type, value, placeholder, onChange, error,
}) => {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const [passType, setPassType] = useState<string>("password")
  const handleToggle = () => {
    if (passType === "password") {
      setPassType("text")
    }
    else {
      setPassType("password")
    }
  }
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <span className="text-[16px] font-[400] text-[#666666] font-outfit">{label}</span>
      <div className='w-full flex flex-row relative'>
        <input onChange={handelChange} type={type === "password" ? passType : type} value={value} className={`p-3 border ${error ? 'border-red-500/60' : 'border-border/50'}  rounded-[12px] font-outfit outline-none placeholder:font-[400] w-full`} placeholder={placeholder} />
        {type === 'password' ? (
          <span onClick={handleToggle} className="absolute right-4  top-[16px] cursor-pointer -translate-y-1/">
            {passType === "password" ? (
            <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8333 17.6212C21.3342 17.6212 26.3142 14.553 28.9896 9.71212C26.3142 4.87121 21.3342 1.80303 15.8333 1.80303C10.3323 1.80303 5.35234 4.87121 2.67689 9.71212C5.35234 14.553 10.3323 17.6212 15.8333 17.6212ZM15.8333 0.166664C22.3896 0.166664 28.0678 4.0503 30.8333 9.71212C28.0678 15.3739 22.3896 19.2576 15.8333 19.2576C9.27689 19.2576 3.59871 15.3739 0.833252 9.71212C3.59871 4.0503 9.27689 0.166664 15.8333 0.166664ZM15.8333 13.5303C16.8459 13.5303 17.8171 13.128 18.5331 12.412C19.2492 11.6959 19.6514 10.7248 19.6514 9.71212C19.6514 8.69947 19.2492 7.7283 18.5331 7.01226C17.8171 6.29621 16.8459 5.89394 15.8333 5.89394C14.8206 5.89394 13.8494 6.29621 13.1334 7.01226C12.4173 7.7283 12.0151 8.69947 12.0151 9.71212C12.0151 10.7248 12.4173 11.6959 13.1334 12.412C13.8494 13.128 14.8206 13.5303 15.8333 13.5303ZM15.8333 15.1667C14.3866 15.1667 12.9992 14.592 11.9763 13.5691C10.9534 12.5461 10.3787 11.1588 10.3787 9.71212C10.3787 8.26548 10.9534 6.8781 11.9763 5.85517C12.9992 4.83225 14.3866 4.25757 15.8333 4.25757C17.2799 4.25757 18.6673 4.83225 19.6902 5.85517C20.7131 6.8781 21.2878 8.26548 21.2878 9.71212C21.2878 11.1588 20.7131 12.5461 19.6902 13.5691C18.6673 14.592 17.2799 15.1667 15.8333 15.1667Z" fill="#777777"/>
            </svg>
            

            ) : (
              <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9287 19.5541L28.6855 23.3109L27.5278 24.4673L4.71962 1.65909L5.87462 0.5L9.7678 4.39318C11.6496 3.64045 13.6951 3.22727 15.8333 3.22727C22.3896 3.22727 28.0678 7.11091 30.8333 12.7727C29.4992 15.5154 27.4618 17.8554 24.9287 19.5541ZM11.0414 5.66818L13.3105 7.93727C14.34 7.39908 15.5144 7.20361 16.6627 7.37932C17.8109 7.55503 18.8731 8.09275 19.6945 8.91416C20.516 9.73557 21.0537 10.7978 21.2294 11.9461C21.4051 13.0943 21.2096 14.2687 20.6714 15.2982L23.7464 18.3732C25.8928 17.0095 27.7064 15.0964 28.9896 12.7741C26.3142 7.93182 21.3342 4.86364 15.8333 4.86364C14.2025 4.86466 12.5831 5.13654 11.0414 5.66818ZM19.4305 14.0573C19.6739 13.3764 19.7189 12.6405 19.5603 11.935C19.4018 11.2296 19.0462 10.5837 18.5349 10.0724C18.0237 9.56115 17.3778 9.20556 16.6723 9.04701C15.9669 8.88847 15.2309 8.93348 14.5501 9.17682L19.4305 14.0573ZM21.8987 21.1536C20.0169 21.9064 17.9714 22.3195 15.8333 22.3195C9.27689 22.3195 3.59871 18.4359 0.833252 12.7741C2.16733 10.0314 4.20473 7.69145 6.7378 5.99273L7.92007 7.175C5.73075 8.57191 3.92776 10.4968 2.67689 12.7727C5.35234 17.6136 10.3323 20.6818 15.8333 20.6818C17.4641 20.6808 19.0834 20.4089 20.6251 19.8773L21.8987 21.1536ZM10.9964 10.25L12.236 11.4909C11.9926 12.1718 11.9476 12.9077 12.1062 13.6132C12.2647 14.3186 12.6203 14.9645 13.1316 15.4758C13.6428 15.987 14.2888 16.3426 14.9942 16.5012C15.6996 16.6597 16.4356 16.6147 17.1164 16.3714L18.3573 17.6095C17.3279 18.1477 16.1535 18.3432 15.0052 18.1675C13.8569 17.9918 12.7947 17.4541 11.9733 16.6327C11.1519 15.8112 10.6142 14.749 10.4385 13.6008C10.2628 12.4525 10.4582 11.2795 10.9964 10.25Z" fill="#777777"/>
              </svg>
              

            )}
          </span>
        ) : ""}

      </div>
    </div>
  );
};

export default Input;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
