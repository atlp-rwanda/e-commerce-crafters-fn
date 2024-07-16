
import React, { useState, useEffect } from "react";
import { HiMapPin } from "react-icons/hi2";
import { toast } from "react-toastify";
// require('dotenv').config()


function LocationButton() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const address = typeof window !== "undefined" && localStorage?.getItem("delivery_address");
  const [currentAddress, setCurrentAddress] = useState(address) || "";

  const handleClick = () => {
    if ("geolocation" in navigator) {
      // console.log("i am here")
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
              },
              (error) => {
                toast.error(error.message);
              }
            );
          } else if (result.state === "denied") {
            toast.error("Allow the location access");
          }
        })
        .catch((error: any) => {
          console.error("Error checking the location permission:", error);
        });
    } else {
      toast.error("Sorry! geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    if (location) {
      const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&result_type=street_address&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      fetch(endpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.results && data.results.length > 0) {
            const { formatted_address, address_components } = data.results[0];
            const city = address_components.find((component: any) =>
              component.types.includes("locality")
            )?.long_name;
            const street = address_components.find((component: any) =>
              component.types.includes("route")
            )?.long_name;
            localStorage.setItem("delivery_address", formatted_address);
            localStorage.setItem("delivery_address_city", city);
            localStorage.setItem("delivery_address_street", street);
            setCurrentAddress(formatted_address);
          }
        })
        .catch((error) => {
          console.log("Fetch error: ", error.message);
        });
    }
  }, [location]);

  

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex items-center px-6 py-3 bg-slate-200 rounded-full md:rounded-lg`}
      >
        <HiMapPin className="shrink-0 text-secondary" />
        <span
          className={
            "truncate max-w-[8rem]  font-outfit text-sm text-gray-300 md:max-w-full"
          }
        >
          {currentAddress ? currentAddress : "Choose Your Delivery Address"}
        </span>
      </button>
    </>
  );
}

export default LocationButton;
