import React from 'react';
import {  ToastContainer } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppRoutes from './Routes';

const App: React.FC = () => (
  <div className="">
    <AppRoutes />
    <ToastContainer/>
  </div>
);

export default App;
