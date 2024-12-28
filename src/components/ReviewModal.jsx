import React, { useState } from "react";
import axios from "axios";

const ReviewModal = ({ booking, onCancel }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    if (review) {
      axios
        .post("http://localhost:5000/reviews", {
          bookingId: booking._id,
          review: review,
          rating: rating,
        })
        .then(() => {
          onCancel(false);
        })
        .catch((error) => {
          console.error("Error posting review", error);
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold">Leave a Review</h2>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border"
            rows="4"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="font-bold">Rating</label>
          <select
            className="w-full p-2 border"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button className="btn btn-secondary" onClick={() => onCancel(false)}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
