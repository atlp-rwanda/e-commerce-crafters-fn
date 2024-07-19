import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AppRoutes from "./Routes";
import i18n from "../src/Lib/i18n";

const App: React.FC = () => {
  useEffect(() => {
    const currentLanguage = localStorage.getItem("lang") || "ENG";
    i18n.changeLanguage(currentLanguage);
  }, []);

  return (
    <div className="">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
