import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState({});
  const [rating, setRating] = useState(0);

  selectedReview.rating;
  useEffect(() => {
    fetch(
      `https://service-review-system-server-beta.vercel.app/my-reviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err.message));
  }, [user.email]);

  reviews;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://service-review-system-server-beta.vercel.app/reviews/${id}`
          )
          .then(() => {
            setReviews(reviews.filter((review) => review._id !== id));
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
          });
      }
    });
  };

  // Open Update Modal
  const openUpdateModal = (review) => {
    setSelectedReview(review);
    setRating(review.rating);

    document.getElementById("my_modal_1").showModal();
  };

  // Update Review

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const updatedReview = {
      text: form.get("text"),
      date: new Date().toISOString(),
      rating: rating,
    };

    fetch(
      `https://service-review-system-server-beta.vercel.app/reviews/${selectedReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Services Updated successfully",
            icon: "success",
            draggable: true,
          });
          setReviews((prevReview) =>
            prevReview.map((review) =>
              review._id === selectedReview._id
                ? { ...review, ...updatedReview }
                : review
            )
          );
          document.getElementById("my_modal_1").close();
        }
      });

    e.target.reset();
  };

  return (
    <div className="w-10/12 mx-auto min-h-screen mt-8">
      <Helmet>
        <title>MyReviews-ReviewRadar</title>
      </Helmet>
      <h2 className="text-3xl font-bold m-6">My Reviews ({reviews.length})</h2>
      <div className="grid gap-6 p-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="border p-4 shadow-lg flex items-center gap-4 bg-white rounded-xl"
          >
            <div className="avatar ">
              <div className="mask mask-squircle h-24 w-24 border ">
                <img src={review.serviceImage} alt={review.serviceTitle} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{review.companyName}</h3>
              <h3 className="text-gray-600">
                <strong>Service Title: </strong>
                {review.serviceTitle}
              </h3>
              <h3 className="text-gray-600">
                <strong>Review: </strong>
                {review.text}
              </h3>
              <div className="text-gray-600 flex">
                <strong>Rating:</strong>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={review.rating}
                  readOnly
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => openUpdateModal(review)}
                  className="btn btn-primary btn-sm text-white"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-error btn-sm text-white"
                >
                  Delete
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Posted on {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg ml-8">Update Review</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write your review..."
              name="text"
              defaultValue={selectedReview.text}
              required
            ></textarea>
            <Rating
              style={{ maxWidth: 150 }}
              value={rating}
              onChange={setRating}
              required
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white" type="submit">
                Update
              </button>
            </div>
          </form>
          <div className="modal-action justify-center m-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-white">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyReviews;
