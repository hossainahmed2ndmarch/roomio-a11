import React, { useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const ReviewModal = ({ booking, onCancel, user }) => {
  const { displayName, photoURL } = user;
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (review) {
      axios
        .post("http://localhost:5000/reviews", {
          bookingId: booking?._id,
          reviewedRoomId: booking?.bookedId,
          reviewerName: displayName,
          reviewerImage: photoURL,
          review: review,
          rating: rating,
          timestamp: new Date().toISOString(),
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
        <Box className="mt-4">
          <TextField
            label="Reviewer Name"
            variant="outlined"
            fullWidth
            value={displayName}
            InputProps={{
              readOnly: true,
            }}
            className="bg-gray-100"
          />
        </Box>
        <Box className="mt-4">
          <TextField
            label="Your Review"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Box>
        <Box className="mt-4">
          <label className="font-bold">Rating:</label>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Box>
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
