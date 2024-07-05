import React, { useEffect, useState } from "react";
import UserSettings from "../Components/UserSettings";
import ProfileDetailsTab from "../Components/ProfileDetailsTab";
import ChangePasswordTab from "../Components/ChangePasswordTab";
import BusinessInformationTab from "../Components/BusinessInformationTab";
import UserInformation from "../Components/UserInformation";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { Toaster } from "react-hot-toast";
export interface UserDataType {
 cartId: string | null;
 createdAt: string;
 email: string;
 emailVerificationToken: string;
 isTwoFactorEnabled: boolean;
 isVerfied: boolean;
 name: string;
 password: string;
 profile: string;
 resentPasswordExpires: string | null;
 resentPasswordToken: string | null;
 role: string;
 status: string;
 updatedAt: string;
 userId: string;
 wishlistId: string | null;
}
const User = () => {
 const userData = useAuthUser<UserDataType>();
 const authHeader = useAuthHeader();
 const token = authHeader?.split(" ")[1];

 const [user, SetUser] = useState(userData);
 useEffect(() => {
  SetUser(userData);
 }, [userData]);
 return (
  <div className='flex flex-col'>
   <div className='sm:px-3 md:px-7 pb-3'>
    <UserInformation user={user as UserDataType} />
    <UserSettings className='sm:px-4 '>
     <ProfileDetailsTab
      token={token as string}
      user={user as UserDataType}
      setUser={SetUser}
      label={"profiledetails"}
      tabName={"Profile Details"}
     />
     <ChangePasswordTab label={"changepassword"} tabName={"Change Password"} />
     {user?.role === "seller" ? (
      <BusinessInformationTab
       label={"bussininfo"}
       tabName={"Business information"}
      />
     ) : (
      <></>
     )}
    </UserSettings>
    <Toaster position='top-center' />
   </div>
  </div>
 );
};

export default User;
