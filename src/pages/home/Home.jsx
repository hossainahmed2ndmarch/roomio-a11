import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import Offer from "./Offer";
import Services from "./Services";
import Packages from "./Packages";
import FeatureRooms from "./FeatureRooms";
import Reviews from "./Reviews";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Show modal when the homepage loads
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-center mb-4">
              Special Offer
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Enjoy 20% off on all bookings this holiday season! Offer valid
              until December 31, 2024.
            </p>
            <img
              src="https://via.placeholder.com/400x200"
              alt="Special Offer"
              className="w-full rounded-md mb-4"
            />
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Banner></Banner>
      <HotelMap></HotelMap>
      <Offer></Offer>
      <FeatureRooms></FeatureRooms>
      <Reviews></Reviews>
      <Services></Services>
      <Packages></Packages>
    </div>
  );
};

export default Home;
