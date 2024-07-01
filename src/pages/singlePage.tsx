import React from "react";
import Sproduct from "../Components/singleproduct/Sproduct";
import Reviews from "../Components/singleproduct/reviews";
import SimilProduct from "../Components/singleproduct/similaryProduct";
 const Singlepage = () =>{

    return ( 
        <div>
          
         <Sproduct/>
         <Reviews/>
         <SimilProduct/>
        </div>
     );
}

export default Singlepage ;