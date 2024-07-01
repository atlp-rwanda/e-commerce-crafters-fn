import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProductDetails } from '../../Redux/Action/singleProduct';
import { submitReview } from '../../Redux/Action/singleProduct';
import mainproduct1 from "../../asset/images/products/0ce8299f7b1c845d575f949b244ea238.jpg";
import mainproduct2 from "../../asset/images/products/529d198d51183b1643323dd26b8db71d (1).jpg";
import mainproduct4 from "../../asset/images/products/529d198d51183b1643323dd26b8db71d.jpg";
import mainproduct3 from "../../asset/images/products/f8c69bc0404ff0b6158cab028ac8e632.jpg";
import heart from "../../asset/images/products/heart_.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addToWishlist } from '../../Redux/Action/wishlist';
const Sproduct: React.FC = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: any) => state.product.product);
    const status = useSelector((state: any) => state.product.status);
    const error = useSelector((state: any) => state.product.error);
    const [selectedImage, setSelectedImage] = useState<string>(mainproduct1);
    const [isWishlist, setIsWishlist] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchProductDetails() as any);
    }, [dispatch]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    // const toggleWishlist = () => {
    //     setIsWishlist(!isWishlist);
    // };

    const toggleWishlist = () => {
        const userId = localStorage.getItem('userId');
  
        if (!userId) {
            console.error('User ID not found in localStorage');
            return;
        }

        const wishlistItem = {
            userId,
            productId: product.productId,
            price: product.price,
        };

        dispatch(addToWishlist(wishlistItem) as any)
            .then(() => setIsWishlist(true))
            .catch((err: any) => console.error('Error adding to wishlist:', err));
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

    const addSize = () => {
        setSize(size + 1);
    };

    const handleAddToCart = () => {
        const userId = localStorage.getItem('userId');
  
        if (!userId) {
            console.error('User ID not found in localStorage');
            return;
        }
console.log("hhhhhhhh",product.productId)
        const cartItem = {
            userId,
            productId : product.productId,
            quantity,
            price: product.price ,
        };
        dispatch(addToCart(cartItem) as any);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='flex justify-center md:flex-row flex-col'>
            <div className='flex justify-center gap-5 md:flex-row md:w-4/5 w=full  flex-col'>
                <div className="grid grid-cols-1 justify-center p-5 gap-y-5 items-center md:w-[70%]">
                    <div className=' flex justify-center items-center relative'>
                        <img src={selectedImage} alt="Selected product" className=' min-w-[320px] max-w-[100%]  sm:h-[300px] w-full md:w-[95%]-[80%]: h-[200px] md:h-[400px] object-cover' />
                        <div className="absolute bottom-4 left-2 ">
                            <div className=' flex justify-center mt-4'>
                                {[mainproduct1, mainproduct2, mainproduct3, mainproduct4].map((image, index) => (
                                    <span
                                        key={index}
                                        className={`h-4 w-4 rounded-full mx-1 ${selectedImage === image ? 'bg-[#C9974C]' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className=' absolute bottom-4 right-2 bg-[#c9974c4b] p-3 rounded-md ' onClick={toggleWishlist}>
                            <img
                                src={heart}
                                alt="Wishlist"
                                style={{ filter: isWishlist ? 'invert(32%) sepia(92%) saturate(2878%) hue-rotate(358deg) brightness(101%) contrast(105%)' : 'none' }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        {[product.image, mainproduct2, mainproduct3, mainproduct4].map((image, index) => (
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
                <div className='md:w-1/3 w-full '>
                    <div className='flex flex-col gap-6 p-5 mt-10 '>
                        <h1><span className=' text-[#E4A951]'>Stock</span> :  <span className=' font-extrabold text-blue-700'>{product.vendor?.storeName}</span></h1>
                        <h1 className='font-extrabold text-xl'>{product.name}</h1>
                        <div className='bg-[#D9D9D9] p-2 rounded-md text-sm w-28 text-center font-bold'>{product.quantity} IN STOCK</div>
                        <div>
                        <div className="flex flex-row gap-2 items-center justify-around w-full">
                            <div className="flex flex-row gap-4 items-center  w-4/5">
												<span className="text-base text-gray-900 font-bold  tracking-[-0.30px] w-auto">
													
													{product.price && product.discount
														? ((product.price - (product.price * product.discount/100))*quantity)
														: product.price}
												</span>
												<span className="text-base text-[#AFBACA] line-through tracking-[-0.30px] w-auto">
													{product.discount ? `${(product.price)*quantity}` : null}
												</span>
                                                <span className='bg-[#D9D9D9] ml-4 p-1 px-3 rounded-md text-sm'>frw</span>
                                                </div>
												<span className="text-base text-center text-[#D21A0E] font-bold tracking-[-0.30px] w-auto">
													{product.discount
														? `${product.discount}% OFF`
														: null}
												</span>
											</div>
                             
                            </div>
                        <div>
                            <h2 className='text-[#E4A951]'>Description</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <div className="flex gap-4 border-2 justify-around items-center w-1/2 rounded-lg p-2 md:w-3/5 bg-[#F7F7F7] font-bold">
                                <h3 className="">Quantity</h3>
                                <button onClick={subtractQuantity}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span>{quantity}</span>
                                <button onClick={addQuantity}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div className="flex gap-4 border-2 justify-around items-center w-1/2 rounded-lg p-2 md:w-3/5 bg-[#F7F7F7] font-bold">
                                <h3 className="">Size</h3>
                                <button onClick={subtractSize}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span>{size}</span>
                                <button onClick={addSize}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className='bg-[#E4A951] p-3 rounded-lg w-full'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sproduct;
