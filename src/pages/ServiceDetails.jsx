import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import {
   useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname
  console.log(user);

  useEffect(() => {
    axios.get("http://localhost:5000/review")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching featured review:", error);
      });
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(location);
    if (!user) {
      return navigate("/login", { state: { pathname } });
    }

    const form = new FormData(e.target);

    const newReview = {
      text: form.get("review"),
      rating,
      date: new Date().toISOString(),
      userName: user.displayName,
      userPhoto: user.photoURL,
      serviceId: service._id,
    };

    axios
      .post("http://localhost:5000/review", newReview)
      .then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire({
            title: "New Review added successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
    setReviews([...reviews, newReview]);
    setRating(0);
  };

  return (
    <div className="container mx-auto p-8 w-10/12 ">
      <div className="mb-8">
        <img
          src={service.serviceImage}
          alt={service.serviceTitle}
          className="w-32 rounded-lg shadow-xl border mt-4"
        />
        <div className="bg-white w-fit p-4 mt-4 rounded-lg shadow-xl">
          <h1 className="text-xl font-bold ">{service.companyName}</h1>
          <p className="text-gray-600 "> <strong>Title: </strong>{service.serviceTitle}</p>
          <p className="text-gray-600 ">
            <strong>Website: </strong>
            {service.website}
          </p>
          <p className="text-gray-600 ">
            <strong>Category: </strong>: {service.category}
          </p>
          <p className="font-bold">Price: {service.price}</p>
          <p className="text-gray-600 ">{service.description}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg flex items-center space-x-4"
            >
              <img
                src={review.userPhoto}
                alt={review.userName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{review.userName}</h3>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={review.rating}
                  readOnly
                />
                <p className="text-gray-600 mt-2">{review.text}</p>
                <p className="text-sm text-gray-400">
                  Posted on {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
        <form onSubmit={handleAddReview} className="space-y-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Write your review..."
            name="review"
            required
          ></textarea>
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
            required
          />
          <button type="submit" className="btn btn-primary text-white ">
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
