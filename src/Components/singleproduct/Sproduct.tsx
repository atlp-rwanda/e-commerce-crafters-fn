import React, { useState } from 'react';
import mainproduct1 from "../../asset/images/products/0ce8299f7b1c845d575f949b244ea238.jpg";
import mainproduct2 from "../../asset/images/products/529d198d51183b1643323dd26b8db71d (1).jpg";
import mainproduct4 from "../../asset/images/products/529d198d51183b1643323dd26b8db71d.jpg";
import mainproduct3 from "../../asset/images/products/f8c69bc0404ff0b6158cab028ac8e632.jpg";
import heart from "../../asset/images/products/heart_.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sproduct = () => {
    const images = [mainproduct1, mainproduct2, mainproduct3,mainproduct4];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isWishlist, setIsWishlist] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(1);


    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };
    const toggleWishlist = () => {
        setIsWishlist(!isWishlist);
    };
    const subtractQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    const addQuantity = () => {
      setQuantity(quantity + 1);
    };

    const subtractSize = () => {
        if (size > 1) {
            setSize(size - 1);
        }
      };
      const addsize = () => {
        setSize(size + 1);
      };
    return (
        <div className='flex justify-center md:flex-row flex-col'>
            <div className='flex justify-center gap-5 md:flex-row w-4/5 flex-col'>
                <div className="grid grid-cols-1 justify-center p-5 gap-y-5 items-center md:w-[70%]">
                    <div className=' flex justify-center items-center relative'>
                        <img src={selectedImage} alt="Selected product"  className=' min-w-[320px] max-w-[100%]  sm:h-[300px] w-full md:w-[95%]-[80%]: h-[200px] md:h-[400px] object-cover'/>
                        <div className="absolute   bottom-4 left-2 ">
                            <div className=' flex justify-center mt-4'>
                        {images.map((image, index) => (
                            <span
                                key={index}
                                className={`h-4 w-4 rounded-full mx-1 ${selectedImage === image ? 'bg-[#C9974C]' : 'bg-gray-300'}`}
                            />
                        ))}
                      
                    </div>
                    
</div>
<div className=' absolute bottom-4 right-2 bg-[#c9974c4b] p-3 rounded-md '  onClick={toggleWishlist}>
<img 
    src={heart} 
    alt="Wishlist" 
    style={{ filter: isWishlist ? 'invert(32%) sepia(92%) saturate(2878%) hue-rotate(358deg) brightness(101%) contrast(105%)' : 'none' }}
/>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleImageClick(image)}
                                className="cursor-pointer w-full md:w-[100%] rounded-md h-36 object-cover"
                            />
                        ))}
                    </div>
                   
                </div>
                <div className='w-1/3'>
                <div className='flex flex-col gap-6 mt-10 '>
                   <h1> <span className=' text-[#E4A951]'>Stock</span> :  <span className=' font-extrabold text-blue-700'>IHAHIRO</span></h1>
                   <h1 className='font-extrabold text-xl'> Rollex watch</h1>
                   <div className='bg-[#D9D9D9] p-2 rounded-md text-sm w-28 text-center font-bold'> 24 IN STOCK</div>
                   <div > <span className="text-xl font-extrabold"> 118900</span> <span className='bg-[#D9D9D9] p-1 px-3 rounded-md text-sm'>frw</span></div>
                   <div>
                    <h2 className='text-[#E4A951]'>Description</h2>
                    <p>Enjin dai enjin celo horizen secret flow siacoin. Polkadot golem TRON vechain compound TRON ICON arweave stellar. Filecoin ox bancor hive terra.</p>
                   </div>
                   <div className='flex gap-4 justify-center'>
								
								<div className="flex   gap-4  border-2 justify-around items-center w-1/2 rounded-lg p-2 md:w-2/5 bg-[#F7F7F7] font-bold">
                                <h3 className="">Quantity</h3>
									<div
										className="countersection textsection"
										onClick={subtractQuantity}
									>
										<FontAwesomeIcon icon={faMinus} />
									</div>
									<div className="">{quantity}</div>
									<div
										className=""
										onClick={addQuantity}
									>
										<FontAwesomeIcon icon={faPlus} />
									</div>
								</div>
                                <div className="flex   gap-4   border-2 justify-around items-center w-1/2 rounded-lg p-2 md:w-2/5 bg-[#F7F7F7] font-bold">
                                <h3 className="">size</h3>
									<div
										className=" "
										onClick={subtractSize}
									>
										<FontAwesomeIcon icon={faMinus} />
									</div>
									<div className="">{size} mm</div>
									<div
										className=" "
										onClick={addsize}
									>
										<FontAwesomeIcon icon={faPlus} />
									</div>
								</div>
							</div>
                            <div  className='flex justify-between'>
                                <span className='text-[#E4A951] font-bold'>Total</span> 
                                <span>24 0000 rwf</span>
                                
                            </div>
                            <button className=' bg-blue-900 text-white font-extrabold p-3 rounded-lg '>Add to cart</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Sproduct;
