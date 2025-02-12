import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import Offer from "./Offer";
import Services from "./Services";
import Packages from "./Packages";
import FeatureRooms from "./FeatureRooms";
import Reviews from "./Reviews";
import romanticOffer from "../../assets/rooms/romanticoffer.webp";
import { IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet-async";

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
    <div className="px-6 mt-24 mx-auto">
      <Helmet>
        <title>Home | ROOMIO</title>
      </Helmet>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative hero w-11/12 md:w-2/3 lg:w-1/2 p-6 justify-start bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${romanticOffer})`,
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute btn-sm -top-10 -right-3 bg-red-500 text-white text-sm rounded-full p-2 hover:bg-red-600 transition"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="py-8 flex flex-col items-start justify-between text-start text-white">
              {/* Title and Save Badge */}
              <div className="flex flex-col md:flex-row items-center justify-center space-x-12">
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Romantic Getaway Package
                  </h2>
                  {/* Description */}
                  <p className="text-lg md:text-xl lg:text-2xl font-medium">
                    Includes a complimentary dinner and spa <br />
                    session for two.
                  </p>

                  {/* Book Now Button */}
                  <button className="flex flex-row items-center space-x-2 md:space-x-4 border-b-2 border-b-secondary hover:text-secondary transition-colors">
                    Book Now <IoIosArrowForward size={20} />
                  </button>
                </div>
                <div className="bg-red-500 text-white text-xl font-extrabold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg animate-pulse">
                  SAVE 25%
                </div>
              </div>
            </div>
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
