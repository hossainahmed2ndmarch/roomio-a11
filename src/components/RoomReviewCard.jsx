import React from "react";
import { Rating } from "@mui/material";
import dayjs from "dayjs";

const RoomReviewCard = ({review}) => {
 // Format the timestamp to display month and year
  const formattedTimestamp = dayjs(review?.timestamp).format("MMMM, D, YYYY ");
  return (
    <div key={review?._id} className="space-y-6 text-light ">
      <div className="flex flex-row items-center space-x-4">
        <img
          src={review?.reviewerImage}
          className="rounded-full w-12 h-12 object-cover"
          alt={`${review?.reviewerName}'s avatar`}
        />
        <div>
          <p className="font-bold text-lg">{review?.reviewerName}</p>
          <Rating
            value={review?.rating}
            readOnly
            precision={0.5}
            size="small"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p>{review?.review}</p>
      </div>
      <p className="mt-12 flex flex-col space-y-4 items-end right-6 bottom-4 text-sm">
        Reviewed:{" "}
        <span className="text-lg font-semibold ">
          {formattedTimestamp}
        </span>
      </p>
    </div>
  );
};

export default RoomReviewCard;
