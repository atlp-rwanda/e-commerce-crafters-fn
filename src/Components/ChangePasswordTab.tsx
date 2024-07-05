import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
const ChangePasswordTab = ({
 label,
 tabName,
}: {
 label?: string;
 tabName?: string;
}) => {
 return (
  <form className='pt-5 px-2 md:px-5 flex flex-col w-full md:w-[540px]'>
   <div>
    <CustomInput
     label='Old Password'
     inputId='oldpassword'
     labelStyles='text-gray-300 text-sm md:text-base font-outfit mb-2'
     inputStyles='rounded w-full py-2 px-3 bg-gray-100 font-outfit max-w-full md:max-w-64 text-sm md:text-base'
     type='password'
     placeholder='Enter Old Password'
     handleChange={(e): void => {
      console.log(e.target.value);
     }}
    />
    <CustomInput
     label='New Password'
     inputId='newpassword'
     labelStyles='text-gray-300 text-sm md:text-base font-outfit mb-2'
     inputStyles='rounded w-full py-2 px-3 bg-gray-100 font-outfit max-w-full md:max-w-64 text-sm md:text-base'
     type='password'
     placeholder='Enter New Password'
     handleChange={(e): void => {
      console.log(e.target.value);
     }}
    />
    <CustomInput
     label='Re-Type new Password'
     inputId='retypepassword'
     labelStyles='text-gray-300 text-sm md:text-base font-outfit mb-2'
     inputStyles='rounded w-full py-2 px-3 bg-gray-100 font-outfit max-w-full md:max-w-64 text-sm md:text-base'
     type='password'
     placeholder='Re-Type New Password'
     handleChange={(e): void => {
      console.log(e.target.value);
     }}
    />
   </div>
   <div className='flex flex-row gap-x-2 self-end mt-4'>
    <CustomButton
     buttonStyles='transition-colors duration-500 hover:bg-border hover:text-white text-black rounded-lg px-3 md:px-4 py-2 font-outfit text-sm md:text-base'
     title='Discard'
     handleClick={(e) => console.log(e)}
    />
    <CustomButton
     buttonStyles='bg-primary text-white rounded-lg px-3 md:px-4 py-2 font-outfit text-sm md:text-base'
     title='Save Changes'
     handleClick={(e) => console.log(e.target)}
    />
   </div>
  </form>
 );
};

export default ChangePasswordTab;
