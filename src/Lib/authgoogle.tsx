import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
<<<<<<< HEAD
import {jwtDecode} from 'jwt-decode';

const AuthGoogle: React.FC = () => {
    const navigate = useNavigate();
    const signIn = useSignIn();
    const location = useLocation();
    
    const getQueryParams = (search: string) => {
        return new URLSearchParams(search);
    };
    
    useEffect(() => {
        const queryParams = getQueryParams(location.search);
        const token = queryParams.get('token');
        const userDataString = queryParams.get('user');
        const userData = userDataString ? JSON.parse(userDataString) : null;

        if (token) {
            const decodedToken: any = jwtDecode(token);
            const sign = signIn({
                auth: {
                    token: token,
                    type: "Bearer",
                },
                userState: userData,
            });

            if (sign) {
                if (decodedToken.role === "vendor") {
                    navigate('/vendor');
                } else if (decodedToken.role === "buyer") {
                    navigate('/buyer');
                } else {
                    navigate('/buyer');
                }
            }
        } else {
            console.log("no token found");
        }
    }, [location.search, navigate, signIn]);

    return (
        <div className='w-full flex items-center justify-center h-screen'>
            <span>Loading..</span>
           
        </div>
    );
=======
import { jwtDecode } from 'jwt-decode';

const AuthGoogle: React.FC = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const location = useLocation();

  const getQueryParams = (search: string) => new URLSearchParams(search);

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const token = queryParams.get('token');
    const userDataString = queryParams.get('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const sign = signIn({
        auth: {
          token,
          type: 'Bearer',
        },
        userState: userData,
      });

      if (sign) {
        if (decodedToken.role === 'vendor') {
          navigate('/vendor');
        } else if (decodedToken.role === 'buyer') {
          navigate('/buyer');
        } else {
          navigate('/admin');
        }
      }
    } else {
      console.log('no token found');
    }
  }, [location.search, navigate, signIn]);

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <span>Loading..</span>

    </div>
  );
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
};

export default AuthGoogle;
