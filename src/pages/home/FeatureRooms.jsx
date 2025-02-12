import axios from "axios";
import React, { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard";
import { Link } from "react-router-dom";

const FeatureRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("https://roomio-a11-server.vercel.app/rooms/top-rated").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
        <div className="space-y-4">
          <h5 className="text-primary text-lg font-bold">
            Enjoy World-class Stay Experience
          </h5>
          <h2 className="text-[#5c4b51] text-5xl font-bold">Select Your Chalet</h2>
          <p className="text-primary font-medium">
            Escape to the beautiful mountains and valleys where dreams come{" "}
            <br />
            true. Culture, nature, streams and gastronomy. Immerse yourself in{" "}
            <br />
            the restorative qualities of nature, far from the disturbances of{" "}
            <br />
            everyday life.
          </p>
        </div>
        <div>
          <Link
            to="/all-rooms"
            className="btn bg-primary rounded-none border-none text-light text-lg"
          >
            Discover All Rooms
          </Link>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {rooms.map((room) => (
          <RoomCard
            key={room.roomDetails._id}
            room={room.roomDetails}
            avgRating={room.avgRating}
          ></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureRooms;
