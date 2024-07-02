import React, { useState, useEffect } from "react";
import heart from "../../asset/images/products/heart_.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, addToCart } from "../../Redux/Action/singleProduct";
import { addToWishlist, removeFromWishlist, fetchWishlist } from "../../Redux/Action/wishlist";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./product.css"
import { toast } from "react-toastify";




const Sproduct: React.FC<{ productId: string }> = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.product.product);
  const status = useSelector((state: any) => state.product.status);
  const error = useSelector((state: any) => state.product.error);
  const wishlist = useSelector((state: any) => state.wishlist.items.wishlist); 
  const [selectedImage, setSelectedImage] = useState<string>(product.image ? product.image[0] : '');
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<number>(1);
  const [ isLoadingCart, setLoadingCart] = useState<boolean>(false)

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    // @ts-ignore
    dispatch(fetchProductDetails(productId) as any); 
    if (userId) {
      dispatch(fetchWishlist(userId) as any);
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (product.image && product.image.length > 0) {
      setSelectedImage(product.image[0]);
    }
  }, [product.image]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId && Array.isArray(wishlist)) { 
      console.log('Is in wwwwwwww:', wishlist);
      const isInWishlist = wishlist.some((item: any) => item.productId === product.productId);
      console.log('Is in wishlist:', isInWishlist);
      setIsWishlist(isInWishlist);
    }
  }, [wishlist, product.productId]);
  
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
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

   

    if (isWishlist) {
      dispatch(removeFromWishlist({ userId, productId: product.productId }) as any)
        .then(() => {
          
          toast.success("Wishlist removed successfully");
          dispatch(fetchWishlist(userId) as any); 
        })
        .catch((err: any) => {
          
          console.error('Error removing from wishlist:', err);
        });
    } else {
      dispatch(addToWishlist(wishlistItem) as any)
        .then(() => {
          
          toast.success("Wishlist added successfully");
          dispatch(fetchWishlist(userId) as any); 
        })
        .catch((err: any) => {
          
          console.error('Error adding to wishlist:', err);
        });
    }
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

    const cartItem = {
      userId,
      productId: product.productId,
      quantity,
      price: product.price,
    };
    
    setLoadingCart(true);
    
    dispatch(addToCart(cartItem) as any)
    .then(() => {
      setLoadingCart(false);
   
    })
    .catch((err: any) => {
      setLoadingCart(false);
      console.error('Error adding to cart:', err);
     
    });
  };


  if (status === 'loading') {
    return<div className='flex justify-center md:flex-row lg:flex-col items-center flex-col'>
    <div className='flex justify-center gap-5 md:flex-row md:w-4/5 flex-col'>
      <div className="grid grid-cols-1 justify-center p-5 gap-y-5 items-center md:w-[70%]">
        <Skeleton height={400}  />
        <Skeleton height={90} />
        <Skeleton height={144} />
      </div>
      <div className='md:w-1/2 w-full'>
        <div className='flex flex-col gap-6 p-5 mt-10'>
          <Skeleton height={20} width={100} />
          <Skeleton height={30} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30} width={200} />
          <Skeleton count={3} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30} width={100} />
          <Skeleton height={50} />
        </div>
      </div>
    </div>
  </div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex justify-center md:flex-row lg:flex-col items-center flex-col'>
      <div className='flex justify-center gap-5 md:flex-row md:w-4/5 flex-col'>
        <div className="grid grid-cols-1 justify-center p-5 gap-y-5 items-center md:w-[70%]">
          <div className='flex justify-center items-center relative'>
            <img src={selectedImage} alt="Selected product" className='min-w-[300px] max-w-[100%] sm:h-[300px] w-full md:w-[95%] md:h-[400px] h-[200px] object-cover' />
            <div className="absolute bottom-4 translate-x-6 left-6">
              <div className='flex justify-center mt-4'>
                {product.image && product.image.map((image: string, index: number) => (
                  <span
                    key={index}
                    className={`h-4 w-4 rounded-full mx-1 ${selectedImage === image ? 'bg-[#C9974C]' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
            <div className='absolute bottom-4 -translate-x-6 right-4 bg-[#c9974c4b] p-3 rounded-md cursor-pointer' onClick={toggleWishlist}>
              <img
                src={heart}
                alt="Wishlist"
                style={{
                  filter: isWishlist ? 'invert(32%) sepia(92%) saturate(2878%) hue-rotate(358deg) brightness(101%) contrast(105%)' : 'none',
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {product.image && product.image.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(image)}
                className="cursor-pointer w-full md:w-[100%] rounded-md h-[10vh] md:h-[15vh] object-cover"
              />
            ))}
          </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <div className='flex flex-col gap-6 p-5 mt-10'>
            <h1><span className='text-[#E4A951]'>Stock</span> : <span className='font-extrabold text-blue-700'>{product.Vendor?.storeName}</span></h1>
            <h1 className='font-extrabold text-xl'>{product.name}</h1>
            <div className='bg-[#D9D9D9] p-2 rounded-md text-sm w-28 text-center font-bold'>{product.quantity} IN STOCK</div>
            <div>
              <div className="flex flex-row flex-container gap-2 items-center justify-around w-full">
                <div className="flex flex-row gap-4 items-center w-full md:w-4/5">
                  <span className="text-base text-gray-900 font-bold tracking-[-0.30px] w-auto">
                    {product.price && product.discount
                      ? ((product.price - (product.price * product.discount / 100)) * quantity)
                      : product.price}
                  </span>
                  <span className="text-base text-[#AFBACA] line-through tracking-[-0.30px] w-auto">
                    {product.discount ? `${(product.price) * quantity}` : null}
                  </span>
                  <span className='bg-[#D9D9D9] ml-4 p-1 px-3 rounded-md text-sm'>frw</span>
                </div>
                <span className="text-base text-center text-[#D21A0E] font-bold tracking-[-0.30px] w-auto">
                  {product.discount ? `${product.discount}% OFF` : null}
                </span>
              </div>
            </div>
            <div>
              <h2 className='text-[#E4A951]'>Description</h2>
              <p>{product.description}</p>
            </div>
            <div className='flex-container flex  gap-4  w-full justify-center'>
              <div className="flex gap-4 border-2 justify-around items-center  rounded-lg p-2 md:w-[180px] bg-[#F7F7F7] font-bold">
                <h3 className="">Quantity</h3>
                <button onClick={subtractQuantity}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{quantity}</span>
                <button onClick={addQuantity}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="flex gap-4 border-2 justify-around items-center  rounded-lg p-2 md:w-[150px] bg-[#F7F7F7] font-bold">
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
            <button onClick={handleAddToCart} className='bg-[#E4A951] p-3 rounded-lg w-full'>{isLoadingCart ? 'Adding ...' : 'Add to Cart'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sproduct;