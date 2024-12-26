import React from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LuBedDouble } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";

const Rooms = () => {
  const rooms = useLoaderData();
  const navigate = useNavigate();
  console.log(rooms);
  return (
    <div className="my-10 p-6">
      <div className="text-center space-y-5 mb-10">
        <h5 className="text-secondary text-lg font-semibold">
          Comfortable Rooms & Space
        </h5>
        <h2 className="text-black text-3xl font-bold">
          Explore our refined accommodation options and <br />
          find the perfect space for your stay.
        </h2>
        <p>
          All rooms have a bathroom with bathtub and/or shower, cable
          television/radio, free WIFI <br />
          and mini bar. In addition, all rooms are equipped with a Nespresso
          coffee machine. Most <br />
          rooms are carpeted, some have parquet flooring.
        </p>
        <div className="flex flex-row items-center justify-center space-x-8">
          <p className="flex flex-row items-center text-secondary text-lg font-semibold">
            <FaRegClock className="mr-4" />
            Check In: 3:00 pm
          </p>
          <p className=" text-secondary text-3xl font-semibold">|</p>
          <p className="flex flex-row items-center text-secondary text-lg font-semibold">
            <FaRegClock className="mr-4" />
            Check Out: 12:00 pm
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="card card-compact bg-base-100 w-full rounded-none"
          >
            {/* Image */}
            <div
              className="hero place items-start p-4 h-96"
              style={{
                backgroundImage: ` url(${room.image})`,
              }}
            >
              <button className="btn mr-[550px] bg-light rounded-none outline-none">
                ${room.price}/Night
              </button>
            </div>
            <div className="card-body space-y-5">
              <h2 className="card-title text-3xl">{room.title}</h2>
              <h3 className="text-secondary font-medium text-xl">
                {room.size}/ {room.category}/ {room.guests} Guests
              </h3>
              <div className="flex flex-row items-start justify-between">
                <p className="flex flex-row items-center text-primary font-medium text-lg">
                  <SlSizeFullscreen className="mr-4" />
                  {room.size}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-lg">
                  <GoPeople className="mr-4" />
                  {room.guests}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-lg">
                  <LuBedDouble className="mr-4" />
                  {room.bed}
                </p>
                <p className="flex flex-row items-center text-primary font-medium text-lg">
                  <FaBath className="mr-4" />
                  {room.bathroom}
                </p>
              </div>
              <p className="text-primary text-xl font-medium ">
                {room.description}
              </p>
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
        ))}
      </div>
    </div>
  );
};

export default Rooms;
