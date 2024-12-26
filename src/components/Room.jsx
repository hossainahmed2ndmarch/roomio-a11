import React from "react";
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

const Room = () => {
  const room = useLoaderData();
  const {
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
  } = room;

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
        <div className="card-body space-y-5">
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
            <h3 className="text-2xl font-bold text-primary">Room Amenities</h3>
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
              onClick={() => navigate(`/room-details/${room._id}`)}
              className="flex flex-row items-center space-x-4 border-b-2 text-xl text-primary border-b-secondary"
            >
              Book Now <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
