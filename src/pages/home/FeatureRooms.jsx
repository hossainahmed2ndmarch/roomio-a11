import axios from "axios";
import React, { useEffect, useState } from "react";
import RoomCard from "../../components/RoomCard";

const FeatureRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/rooms/home").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
        <div>
          <h5 className="text-primaryLight text-xl">
            Enjoy World-class Stay Experience
          </h5>
          <h2 className="text-black text-3xl font-bold">Select Your Chalet</h2>
          <p className="text-primaryLight font-medium">
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
          <button className="btn bg-secondary rounded-none border-none text-light text-lg">
            Discover All Rooms
          </button>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-6 ">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureRooms;
