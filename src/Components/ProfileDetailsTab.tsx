import React from "react";
import { Tab } from "./Settings";
import CustomButton from "./CustomButton";
import { FiUpload } from "react-icons/fi";
import CustomInput from "./CustomInput";
const ProfileDetailsTab = ({
 label,
 tabName,
}: {
 label?: string;
 tabName?: string;
}) => {
 return (
  <Tab>
   <section className='px-2 sm:px-2 md:px-5 pt-5 flex flex-col md:flex-row'>
    <div className='flex flex-col md:flex-row items-center gap-y-4 md:gap-x-5'>
     <img
      src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'
      alt='Profile'
      className='rounded-full w-20 h-20 md:w-26 md:h-26 object-cover'
     />
     <div className='text-center'>
      <CustomInput
       label='Upload Picture'
       icon={<FiUpload />}
       labelStyles='inline-flex items-center px-2 md:px-4 py-1 bg-gray-100 rounded-md cursor-pointer text-gray-500 gap-x-3 font-outfit text-sm md:text-sm'
       inputId='upload'
       type='file'
       inputStyles='hidden'
       handleChange={(e) => console.log(e)}
      />
      <div className='mt-2 text-gray-300 font-outfit text-xs md:text-sm'>
       Png or Jpg file
      </div>
     </div>
    </div>
    <div className='w-full md:max-w-lg flex flex-col md:items-end'>
     <CustomInput
      label='Email'
      inputId='email'
      labelStyles='text-gray-300 text-sm md:text-base font-outfit mb-2'
      inputStyles='rounded w-full py-2 px-3 bg-gray-100 font-outfit text-sm md:text-base'
      type='email'
      placeholder='crafters@gmail.com'
      handleChange={(e): void => {
       console.log(e.target.value);
      }}
     />
     <CustomInput
      label='Name'
      inputId='name'
      labelStyles='text-sm text-gray-300 md:text-base font-outfit mb-2'
      inputStyles='rounded w-full py-2 px-3 bg-gray-100 font-outfit text-sm md:text-base'
      type='text'
      placeholder='Crafters'
      handleChange={(e): void => {
       console.log(e.target.value);
      }}
     />
     <div className='flex flex-row gap-x-2 mt-4 sm:self-end'>
      <CustomButton
       buttonStyles='transition-colors duration-500 hover:bg-primary hover:text-white text-black rounded-lg px-3 md:px-4 py-2 font-outfit text-sm md:text-base'
       title='Discard'
       handleClick={(e) => console.log(e)}
      />
      <CustomButton
       buttonStyles='bg-primary text-white rounded-lg px-3 md:px-4 py-2 font-outfit text-sm md:text-base'
       title='Save Changes'
       handleClick={(e) => console.log(e.target)}
      />
     </div>
    </div>
   </section>
  </Tab>
 );
};

export default ProfileDetailsTab;
