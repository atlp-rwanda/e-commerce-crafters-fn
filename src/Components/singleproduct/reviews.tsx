import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from './star';
import { submitReview } from '../../Redux/Action/singleProduct';

interface Review {
  ratingId: string;
  ratingScore: string | null;
  feedback: string;
  productId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}


const Review: React.FC= () => {
  const [showContent, setShowContent] = useState(false);
  const [reviewFeedback, setReviewFeedback] = useState({
    name: '',
    feedback: '',
    ratingScore: 0,
  });
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [ratingScore, setRating] = useState(3);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { loading: isLoading, error } = useSelector((state: any) => state.reviews);

  useEffect(() => {
    fetch('http://localhost:5000/getfeedback/10ac05ed-9a26-416d-a491-2aa3d1d46b25')
      .then(response => response.json())
      .then(data => setReviews(data.ratings.reverse()))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [reviewSubmitted]);

  const showMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  const showLess = () => {
    setVisibleReviews(3);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewFeedback({
      ...reviewFeedback,
      [name]: value,
    });
  };

  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating);
    setReviewFeedback({
      ...reviewFeedback,
      ratingScore: selectedRating,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitReview(reviewFeedback) as any).then(() => {
      setReviewFeedback({
        name: '',
        feedback: '',
        ratingScore: 0,
      });
      setReviewSubmitted(true);
    });
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="md:w-4/5 w-full p-5 py-4">
        <h1 className="text-4xl font-extrabold">Review</h1>
        <div className="w-4/5 flex flex-col gap-3 justify-center">
          <div className="flex pt-4 justify-between">
            <div>{reviews.length} Reviews</div>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <StarRating rating={4} />
                </div>
                <div
                  className="cursor-pointer text-[#5ECE7B] text-center"
                  onClick={toggleContent}
                >
                  Leave my review
                </div>
              </div>
              <span>4 rates</span>
            </div>
          </div>
          {showContent && (
            <div className="ml-9 md:ml-0 py-4">
              <div className="bg-[#F9FAFB] mt-7 p-2.5 grid md:grid-cols-2 grid-cols-1 justify-between w-3/5 md:w-full">
                <p className="md:w-3/4 w-full">How will you rate this product?</p>
                <div className="mr-0 md:mr-4">
                  <StarRating
                    rating={ratingScore}
                    onRatingChange={handleRatingChange}
                    clickable={true}
                  />
                </div>
              </div>
              <form
                onSubmit={handleFormSubmit}
                className="py-4 flex flex-col items-center gap-4 justify-center w-3/5 md:w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="name....."
                  onChange={handleInputChange}
                  value={reviewFeedback.name}
                  className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <textarea
                  name="feedback"
                  rows={4}
                  className="block mt-5 p-2.5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={reviewFeedback.feedback}
                  onChange={handleInputChange}
                  placeholder="Any feedback you would like to give your account manager..."
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-900 text-white font-extrabold p-3 md:w-1/2 w-full rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit Feedback'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </div>
          )}
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div key={review.ratingId} className="grid grid-cols-10 gap-8 mb-4">
              <div className="col-span-1 flex justify-center items-baseline">
                <span className="bg-gray-500 rounded-full p-8 w-4 h-4 text-4xl text-center flex justify-center items-center font-bold text-[#C9974C]">
                  {index + 1}
                </span>
              </div>
              <div className="col-span-9 gap-y-4 flex flex-col items-baseline">
                <span className="text-[#C9974C] text-xl font-bold">{review.name}</span>
                <div className="flex gap-1">
                  <StarRating rating={review.ratingScore ? Number(review.ratingScore) : 0} />
                </div>
                <data>{new Date(review.createdAt).toLocaleDateString()}</data>
                <p>{review.feedback}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-start mt-4">
            {visibleReviews < reviews.length && (
              <button onClick={showMore} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
                Show More
              </button>
            )}
            {visibleReviews > 3 && (
              <button onClick={showLess} className="px-4 py-2 bg-red-500 text-white rounded">
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
