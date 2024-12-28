import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@mui/material";
import dayjs from "dayjs";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBath, FaSwimmingPool, FaWifi, FaCouch, FaTv } from "react-icons/fa";
import { GiKidSlide } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { LuBed } from "react-icons/lu";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlineCrib } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { TbHorseToy } from "react-icons/tb";
import { LuRefrigerator } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { MdCoffeeMaker } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaPumpSoap } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiHairDryerBold } from "react-icons/pi";
import { GiSlippers } from "react-icons/gi";
import BookingModal from "./BookingModal";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Room = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    price,
    image,
    location,
    roomAmenities,
    familyAmenities,
    description,
    bathroom,
    bed,
    guests,
    size,
    category,
    title,
    isAvailable,
  } = room;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingDisabled, setIsBookingDisabled] = useState(!isAvailable);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  // Load Reviews
  useEffect(() => {
    axios
      .get(`http://localhost:5000/room-reviews?roomId=${_id}`)
      .then((res) => {
        setReviews(res?.data);
      });
  }, [_id]);

  const handleBooking = () => {
    if (isAvailable) {
      setIsModalOpen(true);
      console.log("Modal Open State:", isModalOpen);
      // Open the modal on button click
    } else {
      alert("This room is already booked.");
    }
  };

  const handleConfirmBooking = () => {
    // Disable the "Book Now" button after booking
    setIsBookingDisabled(true);
    setIsModalOpen(false); // Close the modal after confirmation
    alert("Booking confirmed! The room is now unavailable.");
  };

  // Format the timestamp to display month and year
  // const formattedTimestamp = dayjs(review?.timestamp).format("MMMM, D, YYYY ");

  // Map icons for room amenities
  const roomAmenityIcons = {
    "Air Conditioner": <TbAirConditioning />,
    "Wifi & Internet": <FaWifi />,
    "Cable TV": <FaTv />,
    Slippers: <GiSlippers />,
    "In-room Safe": <AiOutlineSafetyCertificate />,
    "Hair Dryer": <PiHairDryerBold />,
    Towels: <GiTowel />,
    "Espresso Machine": <MdCoffeeMaker />,
    "Welcome Drinks": <BiSolidDrink />,
    "In-room Refrigerator": <LuRefrigerator />,
    Shampoo: <FaPumpSoap />,
  };

  // Map icons for family-friendly amenities
  const familyAmenityIcons = {
    "Kids Swimming Pool": <FaSwimmingPool />,
    "Baby Crib": <MdOutlineCrib />,
    "Washing Machine": <GiWashingMachine />,
    "Kids Swimming Pool": <GiKidSlide />,
    "Private Parking": <LuCircleParking />,
    "Kids Play Area": <TbHorseToy />,
    "Pet Friendly": <MdOutlinePets />,
    "Extra Beds": <LuBed />,
    "Laundry Service": <MdOutlineLocalLaundryService />,
    "Kids Toys": <TbHorseToy />,
  };

  return (
    <div className="my-10 p-6">
      <div className="card card-compact bg-base-100 w-full rounded-none">
        {/* Image */}
        <img src={image} alt="" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Room Details */}
          <div className="col-span-2 card-body space-y-5">
            <h2 className="card-title text-3xl">{title}</h2>
            <h3 className="text-secondary font-medium text-xl">
              {size}/ {category}/ {guests} Guests
            </h3>
            <div className="flex flex-row items-start justify-between">
              <p className="flex flex-row items-center text-primary font-medium text-lg">
                <SlSizeFullscreen className="mr-4" />
                {size}
              </p>
              <p className="flex flex-row items-center text-primary font-medium text-lg">
                <GoPeople className="mr-4" />
                {guests}
              </p>
              <p className="flex flex-row items-center text-primary font-medium text-lg">
                <LuBedDouble className="mr-4" />
                {bed}
              </p>
              <p className="flex flex-row items-center text-primary font-medium text-lg">
                <FaBath className="mr-4" />
                {bathroom}
              </p>
            </div>
            <p className="text-primary text-xl font-medium">{description}</p>

            {/* Family-Friendly Amenities */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-primary">
                Family-friendly Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {familyAmenities.map((fAmenity, idx) => (
                  <div
                    key={idx}
                    className="bg-[#ece9e4] p-6 flex flex-row items-center justify-center space-x-5 text-primary text-xl font-bold"
                  >
                    {familyAmenityIcons[fAmenity]}
                    <span className="mt-2">{fAmenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Amenities */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-primary">
                Room Amenities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {roomAmenities.map((rAmenity, idx) => (
                  <li
                    key={idx}
                    className="list-none flex items-center text-primary text-lg font-bold"
                  >
                    {roomAmenityIcons[rAmenity] || <FaCouch />}{" "}
                    {/* Default icon */}
                    <span className="ml-2">{rAmenity}</span>
                  </li>
                ))}
              </div>
            </div>

            <div className="card-actions justify-start">
              <button
                onClick={() => handleBooking()}
                disabled={isBookingDisabled}
                className="flex flex-row items-center space-x-4 border-b-2 text-xl text-primary border-b-secondary"
              >
                {isBookingDisabled ? "Already Booked" : "Book Now"}{" "}
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/* Room Reviews */}
          <div className="bg-primary border rounded-lg shadow-md p-6 ">
            <h2 className="text-2xl font-bold text-[#ece9e4]">
              Guest Experiences That Speak Volumes
            </h2>
            <div className=" mt-10 grid grid-cols-1 gap-6">
              {reviews.map((review) => (
                <div key={review?._id} className="space-y-6 text-light ">
                  <div className="flex flex-row items-center space-x-4">
                    <img
                      src={review?.reviewerImage}
                      className="rounded-full w-12 h-12 object-cover"
                      alt={`${review?.reviewerName}'s avatar`}
                    />
                    <div>
                      <p className="font-bold text-lg">
                        {review?.reviewerName}
                      </p>
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
                      {/* {formattedTimestamp} */}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      {isModalOpen && (
        <BookingModal
          room={room}
          user={user}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Close modal
          onConfirm={handleConfirmBooking} // Confirm booking
        />
      )}
    </div>
  );
};

export default Room;
