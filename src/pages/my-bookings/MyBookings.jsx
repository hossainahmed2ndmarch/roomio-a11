import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ReviewModal from "../../components/ReviewModal";
import UpdateDateModal from "../../components/UpdateDateModal";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import moment from "moment/moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BookingCard from "./BookingCard";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedReviewBooking, setSelectedReviewBooking] = useState(null);
  const [showUpdateDateModal, setShowUpdateDateModal] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetch the user's bookings from the backend
    // axios
    //   .get(`https://roomio-a11-server.vercel.app/my-booked-rooms?email=${user?.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     setBookings(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching bookings", error);
    //   });
    axiosSecure.get(`/my-booked-rooms?email=${user?.email}`).then((res) => {
      setBookings(res.data);
    });
  }, [user?.email]);

  // Delete functionality
  const handleCancelBooking = (id, bookedId, bookingDate) => {
    // Get current date and booking date
    const currentDate = moment(); // Current date
    const bookedDate = moment(bookingDate);

    // Calculate the difference in days
    const daysUntilBooking = bookedDate.diff(currentDate, "days");

    if (daysUntilBooking <= 1) {
      Swal.fire(
        "Cancellation Not Allowed",
        "You cannot cancel this booking as it is within 1 day of the booking date.",
        "error"
      );
      return;
    }
    // Proceed with cancellation request
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://roomio-a11-server.vercel.app/bookings/${id}`)
          .then(() => {
            // After successful deletion, update the isAvailable status
            return axios.put(`https://roomio-a11-server.vercel.app/rooms/${bookedId}`, {
              isAvailable: true,
            });
          })
          .then(() => {
            setBookings((prevBookings) =>
              prevBookings.filter((booking) => booking._id !== id)
            );
            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          });
      }
    });
  };

  // Update functionality
  const handleUpdateBookingDate = (booking) => {
    setSelectedBooking(booking);
    // console.log(booking);
    setShowUpdateDateModal(true);
  };

  // Review Functionality

  const handleReviewBooking = (booking) => {
    setSelectedReviewBooking(booking);
    setShowReviewModal(true);
  };

  return (
    <div className="my-10 p-4 md:p-6">
      <Helmet>
        <title>MyBookings | ROOMIO</title>
      </Helmet>
      <h2 className="text-4xl text-center text-blackLight font-bold">
        My Bookings
      </h2>
      <p className="text-primary text-center">
        Welcome to the Bookings page! Manage your reservations effortlessly by
        viewing details <br />
        like price, booking date, and descriptions. Select or update booking{" "}
        <br />
        dates and confirm your stay securely with just a click.{" "}
      </p>
      <div className="mt-10 bg-[#b7c9ae] grid grid-cols-1 gap-6 p-6">
        {bookings.map((booking) => (
          <BookingCard
            key={booking?._id}
            booking={booking}
            handleReviewBooking={handleReviewBooking}
            handleUpdateBookingDate={handleUpdateBookingDate}
            handleCancelBooking={handleCancelBooking}
          ></BookingCard>
        ))}
      </div>
      {/* <table className="table-auto w-full mt-4">
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
                    handleCancelBooking(
                      booking?._id,
                      booking?.bookedId,
                      booking?.bookingDate
                    )
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
      </table> */}
      {/* Review Modal */}
      {showReviewModal && (
        <ReviewModal
          user={user}
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
