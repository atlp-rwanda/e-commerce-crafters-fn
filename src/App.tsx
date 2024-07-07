import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppRoutes from './Routes';


const App: React.FC = () =>{
  const [openDark, setOpenDark] = useState(false);
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setOpenDark(savedDarkMode);
    document.getElementById('root').classList.toggle('dark', savedDarkMode);
  }, []);
  return(
 
  <div className="">
    <AppRoutes />
  </div>
);
}
export default App;
