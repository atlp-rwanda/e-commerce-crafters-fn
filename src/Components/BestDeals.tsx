import React, { useEffect, useState } from 'react';

const BestDeals: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const productId = 'de400228-de1e-4bad-b464-d81e27b83777'; 

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
    <section className="bg-[#03315D] text-white p-16 pl-24 flex flex-col md:flex-row items-center justify-between gap-20">
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Best Samsung TV Deals</h2>
        <p className="text-lg md:text-xl mb-6">
          Padmo Alohamora Spleens Knut Pig's Knew Goblet He Peruvian-Night-Powder Minerva.
          Padma Alohamar Spleens Knut Pig's Knew Goblet He Peruvian-Night-Powder Minerva.
        </p>
        <p className="text-lg md:text-xl font-semibold mb-6">From &nbsp;&nbsp; 678,453 &nbsp; <span className="bg-sky-400 text-black p-1 px-3 text-sm rounded-xl">Rwf</span></p>
        <button className="bg-orange-400 px-6 py-2 rounded-lg text-lg">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <img src={imageUrl!} alt="Samsung TV" className="w-full h-80 object-contain rounded-lg" />
        )}
      </div>
    </section>
  );
};

export default BestDeals;
