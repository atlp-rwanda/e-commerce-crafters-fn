<<<<<<< HEAD
import React from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

const Logout = () => {
    const signOut = useSignOut()
   return  ()=>{
        signOut()
        window.location.href="login"
    }
}

export default Logout
=======
import React from 'react';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const Logout = () => {
  const signOut = useSignOut();
  return () => {
    signOut();
    window.location.href = 'login';
  };
};

export default Logout;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
