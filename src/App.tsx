import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppRoutes from './Routes';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <div className="">
    <AppRoutes />
    <ToastContainer/>
  </div>
);

export default App;
