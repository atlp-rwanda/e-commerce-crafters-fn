import React, { useEffect, useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";


const AdminHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime =
        now.toLocaleDateString("en-US") +
        " " +
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); 

    return () => clearInterval(intervalId);
  }, []);



  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
 
        <div>
          <span className="text-gray-600 mr-4 font-bold text-lg">
            Administration
          </span>
          <span className="text-gray-500  text-sm">{currentDateTime}</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center bg-gray-100 rounded-lg py-2 px-4 mr-8">
        <button className="text-gray-600 mr-4">
            <i className="fas fa-bell"></i>
              32
        </button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100  rounded-lg py-2 px-4">
          <div className="bg-secondary rounded-full p-2 flex items-center justify-center h-8 w-8 text-white">
            <span className="text-xs font-medium">
              {'Frerot Ntwali'
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{'Frerot Ntwali'}</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader

