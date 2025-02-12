import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const [rooms, setRooms] = useState(useLoaderData());
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  // Handle filtering rooms
  const handleFilter = () => {
    axios
      .get(
        `https://roomio-a11-server.vercel.app//rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`
      )
      .then((response) => {
        setRooms(response.data);
      });
  };

  return (
    <div className="mt-24 mb-10 p-6">
      <Helmet>
        <title>Rooms | ROOMIO</title>
      </Helmet>
      {/* Filter Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl text-blackLight font-bold">
          Filter Rooms by Price
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 md:space-x-5 space-y-4 md:space-y-0">
          <input
            type="number"
            placeholder="Min Price"
            className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button
            className="btn w-full md:w-auto rounded-none bg-primary text-light border-none"
            onClick={handleFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Rooms List Header */}
      <div className="text-center space-y-5 mb-10">
        <h5 className="text-secondary text-lg md:text-xl font-semibold">
          Comfortable Rooms & Space
        </h5>
        <h2 className="text-blackLight text-2xl md:text-4xl font-bold">
          Explore our refined accommodation options and{" "}
          <br className="hidden md:block" />
          find the perfect space for your stay.
        </h2>
        <p className="text-sm md:text-base">
          All rooms have a bathroom with bathtub and/or shower, cable
          television/radio, free WIFI <br className="hidden md:block" />
          and mini bar. In addition, all rooms are equipped with a Nespresso
          coffee machine. Most <br className="hidden md:block" />
          rooms are carpeted, some have parquet flooring.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <p className="flex flex-row items-center text-secondary text-sm md:text-lg font-semibold">
            <FaRegClock className="mr-2 md:mr-4" />
            Check In: 3:00 pm
          </p>
          <p className="hidden md:block text-secondary text-2xl font-semibold">
            |
          </p>
          <p className="flex flex-row items-center text-secondary text-sm md:text-lg font-semibold">
            <FaRegClock className="mr-2 md:mr-4" />
            Check Out: 12:00 pm
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="card card-compact bg-base-100 w-full rounded-none"
          >
            {/* Image */}
            <div
              className="hero place items-start p-4 h-64 md:h-80 lg:h-96"
              style={{
                backgroundImage: `url(${room.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button className="btn absolute top-4 left-4 bg-light rounded-none text-blackLight outline-none">
                ${room.price}/Night
              </button>
            </div>

            {/* Room Details */}
            <div className="card-body space-y-4 md:space-y-5">
              <h2 className="card-title text-blackLight text-2xl md:text-3xl">
                {room.title}
              </h2>
              <h3 className="text-secondary font-medium text-sm md:text-xl">
                {room.size}/ {room.category}/ {room.guests} Guests
              </h3>
              <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-2 md:gap-0">
                <p className="flex flex-row items-center text-primary font-medium text-sm md:text-lg">
                  <SlSizeFullscreen className="mr-2 md:mr-4" />
                  {room.size}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-sm md:text-lg">
                  <GoPeople className="mr-2 md:mr-4" />
                  {room.guests}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-sm md:text-lg">
                  <LuBedDouble className="mr-2 md:mr-4" />
                  {room.bed}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-sm md:text-lg">
                  <FaBath className="mr-2 md:mr-4" />
                  {room.bathroom}
                </p>
              </div>
              <p className="text-primary text-sm md:text-xl font-medium">
                {room.description}
              </p>
              <div className="card-actions justify-start">
                <button
                  onClick={() => navigate(`/room-details/${room._id}`)}
                  className="flex flex-row items-center space-x-2 md:space-x-4 border-b-2 text-sm md:text-xl text-primary border-b-secondary"
                >
                  Book Now <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
