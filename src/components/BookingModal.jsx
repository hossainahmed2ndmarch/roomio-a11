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
        .put(`http://localhost:5000/rooms/${room._id}`, {
          isAvailable: false,
        })
        .then(() => {
          // Log booking information via POST request
          return axios.post("http://localhost:5000/bookings", {
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
        .catch((error) => {
          console.error("Error during booking:", error);
          alert("An error occurred while processing your booking.");
        });
    } else {
      alert("Please select a date to proceed with booking.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold">Confirm Booking</h2>
        <div className="flex items-center space-x-4">
          <img src={image} alt={title} className="w-24 h-24 object-cover" />
          <div>
            <h3 className="font-bold">{title}</h3>
            <p>Price: ${price}</p>
            <p>User: {user?.name || "Guest"}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Select Booking Date</h3>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
