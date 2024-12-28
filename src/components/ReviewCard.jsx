import React from "react";
import { Rating } from "@mui/material";
import dayjs from "dayjs";

const ReviewCard = ({ reviewData }) => {
  const { reviewerName, review, rating, timestamp, reviewerImage } = reviewData;

  // Format the timestamp to display month and year
  const formattedTimestamp = dayjs(timestamp).format("MMMM, D, YYYY ");

  return (
    <div className="p-6 space-y-6 bg-primary text-light border rounded-lg shadow-md relative">
      <div className="flex flex-row items-center space-x-4">
        <img
          src={reviewerImage}
          className="rounded-full w-12 h-12 object-cover"
          alt={`${reviewerName}'s avatar`}
        />
        <div>
          <p className="font-bold text-lg">{reviewerName}</p>
          <Rating value={rating} readOnly precision={0.5} size="small" />
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p>{review}</p>
      </div>
      <p className="mt-12 flex flex-col space-y-4 items-end right-6 bottom-4 text-sm">
        Reviewed: <span className="text-lg font-semibold ">{formattedTimestamp}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
