import React from "react";
import dayjs from "dayjs";

const BookingCard = ({
  booking,
  handleReviewBooking,
  handleUpdateBookingDate,
  handleCancelBooking,
}) => {
  const { price, title, image, description, bookingDate, _id, bookedId } =
    booking;
  return (
    <div className="p-6 border border-secondary flex flex-col lg:flex-row items-start lg:items-center justify-between space-x-10 space-y-6 lg:space-y-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img className="w-20 h-20 object-cover" src={image} alt="" />
        <div className="space-y-4 text-primary text-sm sm:text-base">
          <h5 className="text-lg font-semibold">{title}</h5>
          <p className="text-sm sm:text-base">{description}</p>
          <p>
            <strong>Booked On: </strong>
            {dayjs(bookingDate).format("MMMM, D, YYYY")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="btn  bg-light rounded-none text-blackLight outline-none">
          ${price}/Night
        </button>
        <button
          onClick={() => handleUpdateBookingDate(_id)}
          className="btn border-none bg-secondary text-light rounded-none"
        >
          Update Date
        </button>
        <button
          onClick={() => handleReviewBooking(booking)}
          className="btn border-none bg-primary text-light rounded-none"
        >
          Review
        </button>
        <button
          onClick={() => handleCancelBooking(_id, bookedId, bookingDate)}
          className="btn border-none bg-red-600 text-light rounded-none"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
