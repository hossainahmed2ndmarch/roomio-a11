import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const BookingModal = ({ room, user, onClose, onConfirm }) => {
  const { price, title, image, description, _id } = room;
  const { email, displayName } = user;
  const [bookingDate, setBookingDate] = useState(null);

  const handleConfirm = () => {
    if (bookingDate) {
      // Update room availability via PUT request
      axios
        .put(`https://roomio-a11-server.vercel.app/rooms/${room._id}`, {
          isAvailable: false,
        })
        .then(() => {
          // Log booking information via POST request
          return axios.post("https://roomio-a11-server.vercel.app/bookings", {
            bookedId: _id,
            userEmail: email,
            price: price,
            title: title,
            image: image,
            description: description,
            bookingDate: bookingDate.toISOString(),
          });
        })
        .then(() => {
          onConfirm(); // Update parent state (if needed)
          onClose(); // Close the modal
        })
        // .catch((error) => {
        //   console.error("Error during booking:", error);
        //   alert("An error occurred while processing your booking.");
        // });
    } 
    // else {
    //   alert("Please select a date to proceed with booking.");
    // }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 space-y-4 rounded-md w-96">
        <h2 className="text-2xl text-blackLight text-center font-bold">
          Confirm Booking
        </h2>
        <div className="flex items-center space-x-4">
          <img src={image} alt={title} className="w-24 h-24 object-cover" />
          <div>
            <h3 className="font-bold text-lg text-blackLight">{title}</h3>
            <p className="text-blackLight">
              <strong>Price:</strong> ${price}
            </p>
            <p className="text-blackLight">
              <strong>User:</strong> {user?.displayName || "Guest"}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-blackLight">Select Booking Date</h3>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            className="border border-primary p-2 w-full"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="btn border-none bg-primary text-light rounded-none hover:text-blackLight"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn border-none bg-secondary text-light rounded-none hover:text-blackLight"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
