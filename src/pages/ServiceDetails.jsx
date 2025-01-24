import { useContext, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const [rating, setRating] = useState(0); // Rating state
  const [reviewText, setReviewText] = useState(''); // Review text state
  const [reviews, setReviews] = useState(service.reviews || []); // Reviews state
  const { user } = useContext(AuthContext); // Authenticated user context

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to submit a review!');
      return;
    }

    const newReview = {
      serviceId: service._id,
      userName: user.displayName || 'Anonymous',
      userPhoto: user.photoURL || 'https://via.placeholder.com/150', // Fallback image
      rating,
      text: reviewText,
      date: new Date().toISOString(),
    };

    // Save review to the database
    const response = await fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      setReviews([...reviews, newReview]); // Update the UI with the new review
      setReviewText(''); // Clear the review input
      setRating(0); // Reset the rating
    } else {
      console.error('Failed to add review');
    }
  };

  return (
    <div className="container mx-auto p-8">
      {/* Service Details */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{service.serviceTitle}</h1>
        <img
          src={service.serviceImage}
          alt={service.serviceTitle}
          className="w-full max-w-lg rounded-lg mt-4"
        />
        <p className="text-gray-600 mt-4">{service.description}</p>
        <p className="mt-4 font-bold">Price: ${service.price}</p>
      </div>

      {/* Reviews Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow flex items-center space-x-4"
            >
              <img
                src={review.userPhoto}
                alt={review.userName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{review.userName}</h3>
                <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                <p className="text-gray-600 mt-2">{review.text}</p>
                <p className="text-sm text-gray-400">
                  Posted on {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
        <form onSubmit={handleAddReview} className="space-y-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
            required
          />
          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
