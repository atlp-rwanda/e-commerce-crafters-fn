import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import { HiMapPin, HiOutlinePencil } from "react-icons/hi2";
import { toast } from "react-toastify";

const SearchLocation = () => {
  const [isInput, setIsInput] = useState<boolean>(false);

  const [location, setLocation] = useState<{
	latitude: number;
	longitude:number;
  } | null>(null);

const [query, setQuery] = useState("");
  const [locSuggestions, setLocSuggestions] = useState<Array<{formatted_address: string}>>(
	[]
  );


  useEffect(() => {
	const askPermission = () => {
navigator.geolocation.getCurrentPosition(
	(position) => {
		const { latitude, longitude } = position.coords;
		setLocation((prevLocation) => ({
			...prevLocation,
			latitude,
			longitude,
		}));
	},
	(error) => {
		console.log(error);
	}
);
	};

	if("geolocation" in navigator) {
		navigator.permissions
		.query({ name: "geolocation"})
		.then((result) => {
			if(result.state === "granted"){
				askPermission();
			} else if(result.state === "prompt"){
				askPermission();
			} else if(result.state === "denied"){
                toast.error("Location access denied, Edit the location")
			}
		})
		.catch((error: any) => {
			console.error("Error checking the location permission:", error)
		});
	} else {
		toast.error("Sorry! geolocation is not supported by the browser")
	}
  }, []);

useEffect(() => {
if(location){
	// console.log("i am here")
    // const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.longitude},${location.latitude}.json?access_token=pk.eyJ1Ijoibm9yYmVydHZpbGxhIiwiYSI6ImNseWVwcW4yaTAzaWkycXMxNjAya203ZmIifQ.VQ_Q6JVzv7bpUD-SawGHKg`;
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&result_type=street_address&key=AIzaSyAtloVBV7BYHFxASugRGpRmBzmrGnWwnc0
`
    fetch(endpoint) 
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
		// console.log(data);
        if (data.results && data.results.length > 0) {
            const place = data.results[0].formatted_address;
            localStorage.setItem("delivery_address", place);
            setQuery(place);
        }
    })
    .catch((error) => {
        console.log('Fetch error: ', error.message);
    });
}
}, [location]);



// const handleChangeLocation = async (event: ChangeEvent<HTMLInputElement>) => {
// 	try{
// 		setQuery(event.target.value);
// 		const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${event.target.value}&result_type=street_address&key=AIzaSyAtloVBV7BYHFxASugRGpRmBzmrGnWwnc0`;

// 		const response = await fetch(endpoint);
// 		const results = await response.json();

// 		setLocSuggestions(results?.results);

// 	} catch (error: any){
// 		console.log("Error fetching data:", error.message);

// 	}
// };
const handleChangeLocation = async (event: ChangeEvent<HTMLInputElement>) => {
	try{
		setQuery(event.target.value);
		const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${event.target.value}&result_type=street_address&key=AIzaSyAtloVBV7BYHFxASugRGpRmBzmrGnWwnc0`;

		const response = await fetch(endpoint);
		const results = await response.json();

		setLocSuggestions(results?.results);

	} catch (error: any){
		console.log("Error fetching data:", error.message);
	}
};

{locSuggestions?.length > 0 && (
  <div className="absolute bg-gray-100 w-full max-h-36 shadow-sm overflow-auto custom-scrollbar">
    {locSuggestions.map((suggestion, index) => (
      <div 
        key={index}
        className="flex items-center justify-between w-full p-1 cursor-pointer hover:bg-gray-200"
        onClick={() => handleSelectedLocation(suggestion.formatted_address)}
      >
        {suggestion.formatted_address}
      </div>
    ))}
  </div>
)}



const handleSelectedLocation = (selectedAddress: string) => {
	localStorage.setItem("delivery_address",selectedAddress);
	setQuery(selectedAddress);
	setLocSuggestions([]);
	setIsInput(false);
};


  return (
    <div className="mx-8 md:mx-12 mt-12">
      <form className="max-w-7xl mx-auto">
        <div className="relative">
          {isInput ? (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiMapPin
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-600"
                />
              </div>
              <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100 outline-none"
                placeholder="Enter your delivery address"
				value={query}
				onChange={handleChangeLocation}
              />
            </>
          ) : (
            <div className="flex flex-col gap-2" onClick={() => setIsInput(true)}>
              <p className="font-poppins">{query}</p>
              <button className="px-4 py-2 mt-2 w-24 inline-flex items-center text-gray-700 bg-slate-300 hover:bg-slate-200 focus-visible:ring-2 rounded-lg">
                <HiOutlinePencil
                  className="mr-1 -ml-1 w-4 h-4"
                  fill="currentColor"
                />
                Edit
              </button>
            </div>
          )}

{locSuggestions?.length > 0 && (
  <div className="absolute bg-gray-100 w-full max-h-36 shadow-sm overflow-auto custom-scrollbar">
    {locSuggestions.map((suggestion, index) => (
      <div 
        key={index}
        className="flex items-center justify-between w-full p-1 cursor-pointer hover:bg-gray-200"
        onClick={() => handleSelectedLocation(suggestion.formatted_address)}
      >
        {suggestion.formatted_address}
      </div>
    ))}
  </div>
)}

        </div>
      </form>
    </div>
  );
};


export default SearchLocation;