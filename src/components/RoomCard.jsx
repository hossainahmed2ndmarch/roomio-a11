import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material"; // Import Material UI Rating component

const RoomCard = ({ room, avgRating }) => {
  const navigate = useNavigate();
  const { image, price, description, bed, guests, size, title, _id } = room;

  return (
    <div className="card card-compact bg-base-100 w-full rounded-none relative">
      {/* Ratings on top-right */}
      <div className="absolute top-4 right-4 flex flex-col items-center">
        <Rating
          value={avgRating} // Use avgRating for the rating value
          precision={0.5} // Allow half-star ratings
          readOnly
          size="medium"
          sx={{
            "& .MuiRating-iconFilled": { color: "gold" }, // Stars in golden color
          }}
        />
        
      </div>

      {/* Image */}
      <div
        className="hero place items-start p-4 h-96"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <button className="btn mr-96 text-blackLight bg-light rounded-none outline-none">
          ${price}/Night
        </button>
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-blackLight text-2xl">{title}</h2>
        <div className="flex flex-row items-center justify-between">
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
        </div>
        <p className="text-primary font-medium ">{description}</p>
        <div className="card-actions justify-start">
          <button
            onClick={() => navigate(`/room-details/${_id}`)}
            className="flex flex-row items-center space-x-4 border-b-2 text-primary border-b-secondary"
          >
            Book Now <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
