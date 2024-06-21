<<<<<<< HEAD
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
=======
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
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
