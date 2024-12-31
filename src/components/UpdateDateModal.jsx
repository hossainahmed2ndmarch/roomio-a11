import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const UpdateDateModal = ({ booking, onCancel, onUpdate }) => {
  const [newDate, setNewDate] = useState(null);
  // const { _id } = booking;
  // console.log(_id);
  console.log(booking);

  const handleUpdateDate = () => {
    if (newDate) {
      axios
        .put(`http://localhost:5000/bookings/${booking}`, {
          bookingDate: newDate.toISOString(),
        })
        .then((response) => {
          onUpdate(response?.data);
          onCancel(false);
        })
        .catch((error) => {
          console.error("Error updating booking date", error);
        });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-3xl text-blackLight text-center font-bold">Update Booking Date</h2>
        <div className="mt-4">
          <DatePicker
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            className="w-full p-2 border border-secondary"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button className="btn border-none bg-red-500 text-light rounded-none hover:text-blackLight" onClick={() => onCancel(false)}>
            Cancel
          </button>
          <button className="btn border-none bg-primary text-light rounded-none hover:text-blackLight" onClick={handleUpdateDate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDateModal;
