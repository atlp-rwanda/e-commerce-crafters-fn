import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Homepage from './Routes/Homepage';
import image from "./asset/images/home-page-dealflow-4.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"

const App: React.FC = () => (
  <Router>
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
