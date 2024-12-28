import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews/home")
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold">Guest Experiences</h2>
      <p>
        Discover what our valued guests have to say about their unforgettable{" "}
        <br />
        stays, from exceptional service to luxurious rooms <br />
        and memorable amenities.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review?._id} reviewData={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
