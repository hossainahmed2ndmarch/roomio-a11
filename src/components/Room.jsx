import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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
import RoomReviewCard from "./RoomReviewCard";
import { Helmet } from "react-helmet-async";

const Room = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
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
  // console.log(reviews);

  // Load Reviews
  useEffect(() => {
    axios
      .get(`https://roomio-a11-server.vercel.app/room-reviews?roomId=${_id}`)
      .then((res) => {
        setReviews(res?.data);
      });
  }, [_id]);

  const handleBooking = () => {
    if (isAvailable && user && user?.email) {
      setIsModalOpen(true);
      // console.log("Modal Open State:", isModalOpen);
      // Open the modal on button click
    } else {
      navigate('/login')
    }
  };

  const handleConfirmBooking = () => {
    // Disable the "Book Now" button after booking
    setIsBookingDisabled(true);
    setIsModalOpen(false);
  };

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
    <div className="mt-24 p-6">
      <Helmet>
        <title>RoomDetails | ROOMIO</title>
      </Helmet>
      <div className="card card-compact bg-base-100 w-full rounded-none">
        {/* Image */}
        <img src={image} alt="" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Room Details */}
          <div className="col-span-2 card-body space-y-5 flex-grow">
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
          <div className="grid-flow-row auto-rows-max bg-primary border rounded-lg shadow-md p-6 ">
            <h2 className="text-2xl font-bold text-[#ece9e4]">
              Guest Experiences That Speak Volumes
            </h2>
            <div className=" mt-10 grid grid-cols-1 gap-6">
              {reviews.map((review) => (
                <RoomReviewCard
                  key={review?._id}
                  review={review}
                ></RoomReviewCard>
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
