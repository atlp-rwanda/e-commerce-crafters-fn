import React, { useEffect, useState } from 'react';

const BestDeals: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const productId = "084bfddb-c87a-42b0-aa27-2f71f39e7671"; 


  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/readProduct/${productId}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const imageUrl = data.image; 
        setImageUrl(imageUrl);
      } catch (error: any) {
        setError('Failed to load image');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [productId]);

  return (
    <section className="bg-primary text-white p-8 sm:p-16 md:pl-24 flex flex-col md:flex-row items-center justify-between sm:items-center justify-center gap-10 sm:gap-0 md:gap-10 font-outfit text-lg md:text-xl sm:text-sm min=-h-screen">
  <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
    <h2 className="text-2xl sm:text-xl md:text-3xl font-bold mb-4 md:mb-8">
      Best Samsung TV Deals
    </h2>
    <p className="text-base sm:text-sm md:text-xl mb-4 md:mb-6">
      Discover the latest Samsung TV deals at unbeatable prices. Whether
      you are upgrading your home entertainment setup or looking for the perfect gift,
      we've got you covered.
    </p>
    <p className="text-base sm:text-sm md:text-xl font-semibold mb-4 md:mb-6">
      From &nbsp;&nbsp; 678,453 &nbsp;
      <span className="bg-sky-400 text-black p-1 px-3 text-xs sm:text-sm rounded-xl">Rwf</span>
    </p>
    <button className="bg-secondary px-4 py-2 sm:px-6 sm:py-2 rounded-lg text-base sm:text-sm md:text-lg">
      Shop Now
    </button>
  </div>
  <div className="md:w-1/2">
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Error: {error}</div>
    ) : (
      <img src={imageUrl!} alt="Samsung TV" className="w-full h-full object-contain rounded-lg mx-auto sm:mx-0" />
    )}
  </div>
</section>
  );
};

export default BestDeals;