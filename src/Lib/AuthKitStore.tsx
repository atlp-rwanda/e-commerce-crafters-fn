<<<<<<< HEAD
import React from "react";
import createStore from "react-auth-kit/createStore"


const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

export default store
=======
import React from 'react';
import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

export default store;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
