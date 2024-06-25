import React, { useState } from 'react';
import StarRating from './star';

const reviews = [
  {
    id: 1,
    name: 'Lesia Ikirezi',
    date: '2nd June, 2024',
    rating: 3,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica',
  },
  {
    id: 2,
    name: 'Lesia Ikirezi',
    date: '2nd June, 2024',
    rating: 4,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica',
  },
  {
    id: 3,
    name: 'Lesia Ikirezi',
    date: '2nd June, 2024',
    rating: 3,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica',
  },
  {
    id: 4,
    name: 'Lesia Ikirezi',
    date: '2nd June, 2024',
    rating: 2.3,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica',
  },
  {
    id: 5,
    name: 'Lesia Ikirezi',
    date: '2nd June, 2024',
    rating: 4,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica',
  },
];

const Review: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [reviewFeedback, setReviewFeedback] = useState({
    title: '',
    feedback: '',
    rating: 0,
  });
  const [rating, setRating] = useState(3);
  const rows = 4;

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
      rating: selectedRating,
    });
  };

  // const handleFormSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   try {
  //     const apiUrl = `/api/v1/reviews/1`; 
  //     const token = localStorage.getItem('token');
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const data = {
  //       title: reviewFeedback.title,
  //       feedback: reviewFeedback.feedback,
  //       ratings: reviewFeedback.rating,
  //     };

  //     const response = await URL.post(apiUrl, data, config);
  //     toast.success('Review submitted successfully');
  //     console.log('Review submitted successfully:', response);

  //     setReviewFeedback({
  //       title: '',
  //       feedback: '',
  //       rating: 0,
  //     });
  //     setShowContent(false); 
  //   } catch (error) {
  //     console.error('Error submitting review:', error);
  //     toast.error('Failed to submit review');
  //   }
  // };

  return (
    <div className="p-4 flex justify-center">
      <div className="md:w-4/5 w-full p-5 py-4">
        <h1 className="text-4xl font-extrabold">Review</h1>
        <div className="w-4/5 flex flex-col gap-3 justify-center">
          <div className="flex  pt-4 justify-between">
            <div>3 Reviews</div>
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
                    rating={rating}
                    onRatingChange={handleRatingChange}
                    clickable={true}
                  />
                </div>
              </div>
              <form
                // onSubmit={handleFormSubmit}
                className="py-4 flex flex-col items-center gap-4 justify-center w-3/5 md:w-full"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Title....."
                  onChange={handleInputChange}
                  value={reviewFeedback.title}
                  className="bg-white border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <textarea
                  name="feedback"
                  rows={rows}
                  className="block mt-5 p-2.5 w-full  text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={reviewFeedback.feedback}
                  onChange={handleInputChange}
                  placeholder="Any feedback you would like to give your account manager..."
                ></textarea>
                <button className="bg-blue-900 text-white font-extrabold p-3 md:w-1/2 w-full rounded-lg ">
                  Submit Feedback
                </button>
              </form>
            </div>
          )}
          {reviews.map((review) => (
            <div key={review.id} className="grid grid-cols-10  gap-8 mb-4">
              <div className="col-span-1 flex justify-center items-baseline">
                <span className="bg-gray-500 rounded-full p-8   w-8 h-8 text-4xl text-center flex justify-center items-center font-bold text-[#C9974C]">
                  {review.id}
                </span>
              </div>
              <div className="col-span-9 gap-y-4 flex flex-col items-baseline">
                <span className="text-[#C9974C] text-xl font-bold">{review.name}</span>
                <div className="flex gap-1">
                  <StarRating rating={review.rating} />
                </div>
                <data>{review.date}</data>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;