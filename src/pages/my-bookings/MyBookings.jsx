import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ReviewModal from "../../components/ReviewModal";
import UpdateDateModal from "../../components/UpdateDateModal";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReviewBooking, setSelectedReviewBooking] = useState(null);
  const [showUpdateDateModal, setShowUpdateDateModal] = useState(false);

  useEffect(() => {
    // Fetch the user's bookings from the backend
    axios
      .get(`http://localhost:5000/my-booked-rooms?email=${user?.email}`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings", error);
      });
  }, [user.email]);

  // Delete functionality
  const handleCancelBooking = (id, bookedId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/bookings/${id}`)
          .then(() => {
            // After successful deletion, update the isAvailable status
            return axios.put(`http://localhost:5000/rooms/${bookedId}`, {
              isAvailable: true,
            });
          })
          .then(() => {
            Swal.fire("Deleted!", "Visa has been deleted.", "success");
            setVisas(bookings.filter((booking) => booking._id !== id));
          });
      }
    });
  };

  // Update functionality
  const handleUpdateBookingDate = (booking) => {
    setSelectedBooking(booking);
    console.log(booking);
    setShowUpdateDateModal(true);
  };

  // Review Functionality

  const handleReviewBooking = (booking) => {
    setSelectedReviewBooking(booking);
    setShowReviewModal(true);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">My Bookings</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="border p-2">
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border p-2">{booking.title}</td>
              <td className="border p-2">${booking.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleUpdateBookingDate(booking?._id)}
                  className="btn btn-secondary mr-2"
                >
                  Update Date
                </button>
                <button
                  onClick={() =>
                    handleCancelBooking(booking?._id, booking?.bookedId)
                  }
                  className="btn btn-danger mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReviewBooking(booking)}
                  className="btn btn-primary"
                >
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Review Modal */}
      {showReviewModal && (
        <ReviewModal
          booking={selectedReviewBooking}
          onCancel={setShowReviewModal}
        />
      )}
      {/* Update date modal */}
      {showUpdateDateModal && (
        <UpdateDateModal
          booking={selectedBooking}
          onCancel={setShowUpdateDateModal}
          onUpdate={(updatedBooking) => {
            setBookings(
              bookings.map((b) =>
                b._id === updatedBooking._id ? updatedBooking : b
              )
            );
            toast.success("Booking date updated successfully!");
          }}
        />
      )}
    </div>
  );
};

export default MyBookings;
