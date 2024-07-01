import React from "react";
import Sproduct from "../Components/singleproduct/Sproduct";
import Reviews from "../Components/singleproduct/reviews";
import SimilProduct from "../Components/singleproduct/similaryProduct";
import Navbar from "../Components/navBar";
 const Singlepage = () =>{

    return ( 
        <div>
           <Navbar />
         <Sproduct/>
         <Reviews/>
         <SimilProduct/>
        </div>
     );
}

export default Singlepage ;