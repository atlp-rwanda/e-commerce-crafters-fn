import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { useVerifyEmailQuery } from '../Redux/features/AuthSlice';

function VerifyEmail() {
  const location = useLocation();
  const getQueryParams = (search: string) => new URLSearchParams(search);
  const queryParams = getQueryParams(location.search);
  const token = queryParams.get('token');
  const {
    data, isLoading, isError, error,
  } = useVerifyEmailQuery(token || '');
  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Puff
          visible
          height="80"
          width="80"
          color="#C9974C"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  if (isError || !data || !data.message) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className=" md:w-1/2 lg:w-1/3 bg-white flex flex-col gap-[10px]  p-4 shadow-lg rounded-[12px] items-center">
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6493 26.5278C15.5063 26.6707 15.3366 26.7841 15.1499 26.8614C14.9631 26.9388 14.7629 26.9786 14.5608 26.9786C14.3587 26.9786 14.1585 26.9388 13.9717 26.8614C13.785 26.7841 13.6153 26.6707 13.4723 26.5278C13.3294 26.3848 13.216 26.2151 13.1387 26.0284C13.0613 25.8416 13.0215 25.6414 13.0215 25.4393C13.0215 25.2371 13.0613 25.037 13.1387 24.8502C13.216 24.6635 13.3294 24.4938 13.4723 24.3508L24.3508 13.4739C24.4936 13.331 24.6632 13.2176 24.8499 13.1402C25.0366 13.0628 25.2366 13.0229 25.4387 13.0228C25.6408 13.0228 25.8409 13.0625 26.0276 13.1398C26.2143 13.217 26.384 13.3303 26.527 13.4731C26.6699 13.616 26.7833 13.7856 26.8607 13.9722C26.9381 14.1589 26.978 14.359 26.978 14.5611C26.9781 14.7631 26.9384 14.9632 26.8611 15.15C26.7838 15.3367 26.6706 15.5064 26.5277 15.6493L15.6493 26.5278Z" fill="red" />
              <path d="M13.4723 15.6493C13.1837 15.3606 13.0215 14.9691 13.0215 14.5608C13.0215 14.1526 13.1837 13.761 13.4723 13.4723C13.761 13.1837 14.1526 13.0215 14.5608 13.0215C14.9691 13.0215 15.3606 13.1837 15.6493 13.4723L26.5262 24.3508C26.6691 24.4936 26.7825 24.6632 26.8599 24.8499C26.9373 25.0366 26.9772 25.2366 26.9773 25.4387C26.9773 25.6408 26.9376 25.8409 26.8603 26.0276C26.7831 26.2143 26.6698 26.384 26.527 26.527C26.3841 26.6699 26.2145 26.7833 26.0279 26.8607C25.8412 26.9381 25.6411 26.978 25.439 26.978C25.237 26.9781 25.0369 26.9384 24.8501 26.8611C24.6634 26.7838 24.4937 26.6706 24.3508 26.5277L13.4723 15.6493Z" fill="red" />
              <path fillRule="evenodd" clipRule="evenodd" d="M20 36.9231C29.3462 36.9231 36.9231 29.3462 36.9231 20C36.9231 10.6538 29.3462 3.07692 20 3.07692C10.6538 3.07692 3.07692 10.6538 3.07692 20C3.07692 29.3462 10.6538 36.9231 20 36.9231ZM20 40C31.0462 40 40 31.0462 40 20C40 8.95385 31.0462 0 20 0C8.95385 0 0 8.95385 0 20C0 31.0462 8.95385 40 20 40Z" fill="red" />
            </svg>

          </div>
          <div className="w-full items-center flex flex-col">

            <h1 className="font-[700] font-outfit text-[32px] text-red-500">Failed!</h1>
            <span className="text-center font-outfit">Verification Link has expired or invalid token</span>
          </div>
          <a href="/signup" className="p-3 px-4 rounded-[6px] text-white font-outfit bg-primary">Back To Sign Up</a>
        </div>
      </div>

    );
  }
  if (data.message === 'Email verified successfully') {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className=" md:w-1/2 lg:w-1/3 bg-white flex flex-col gap-[10px]  p-4 shadow-lg rounded-[12px] items-center">
          <div>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.5376 3.0833C39.381 2.88945 40.2639 2.96302 41.0636 3.2938C41.8632 3.62457 42.5401 4.19614 43.0001 4.92913L47.1418 11.5416C47.4757 12.0742 47.9259 12.5243 48.4585 12.8583L55.071 17C55.8055 17.4597 56.3784 18.137 56.71 18.9375C57.0416 19.7381 57.1154 20.6222 56.921 21.4666L55.171 29.0666C55.0298 29.6808 55.0298 30.3191 55.171 30.9333L56.921 38.5375C57.1135 39.3807 57.0388 40.2629 56.7073 41.0618C56.3758 41.8607 55.8039 42.5366 55.071 42.9958L48.4585 47.1416C47.9252 47.4748 47.4749 47.9251 47.1418 48.4583L43.0001 55.0708C42.5407 55.8045 41.8641 56.377 41.0643 56.7085C40.2646 57.04 39.3815 57.1142 38.5376 56.9208L30.9335 55.1708C30.3206 55.0303 29.6838 55.0303 29.071 55.1708L21.4668 56.9208C20.623 57.1142 19.7398 57.04 18.9401 56.7085C18.1404 56.377 17.4638 55.8045 17.0043 55.0708L12.8626 48.4583C12.5274 47.9253 12.0758 47.4752 11.5418 47.1416L4.93347 43C4.19972 42.5405 3.6273 41.8639 3.29576 41.0642C2.96422 40.2644 2.89002 39.3813 3.08347 38.5375L4.8293 30.9333C4.97047 30.3191 4.97047 29.6808 4.8293 29.0666L3.0793 21.4666C2.88531 20.6217 2.95968 19.7374 3.29203 18.9368C3.62438 18.1361 4.19817 17.4591 4.93347 17L11.5418 12.8583C12.0759 12.5248 12.5275 12.0747 12.8626 11.5416L17.0043 4.92913C17.4641 4.19693 18.1402 3.62589 18.9391 3.29516C19.7379 2.96443 20.6198 2.89038 21.4626 3.0833L29.071 4.82913C29.6838 4.96966 30.3206 4.96966 30.9335 4.82913L38.5376 3.0833Z" stroke="#0FA958" strokeWidth="4.16667" />
              <path d="M19.646 32.2333L28.1252 40.3541L40.3543 19.6458" stroke="#0FA958" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="w-full items-center flex flex-col">

            <h1 className="font-[700] font-outfit text-[32px] text-primary">Success!</h1>
            <span className="text-center">
              Your email has been successfully verified. Welcome to
              <span className="text-secondary font-[600]">Crafters online shop</span>
            </span>
          </div>
          <a href="/login" className="p-3 px-4 rounded-[6px] text-white font-outfit bg-primary">Continue To Login</a>
        </div>
      </div>

    );
  }
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <h1>Verification Link has expired or invalid token</h1>
    </div>
  );
}

export default VerifyEmail;
