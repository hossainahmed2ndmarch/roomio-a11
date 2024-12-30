import React from "react";
import romanticOffer from "../../assets/rooms/romanticoffer.webp";
import familyOffer from "../../assets/rooms/family offerwebp.webp";
import luxuryOffer from "../../assets/rooms/luxaryoffer.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Offer = () => {
  return (
    <section className="my-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-[#5c4b51]">
          Unmissable Deals for Your Perfect Getaway
        </h2>
        <p className="text-primary font-medium">
          Book now and save big on your next dream vacation. Limited-time offers
          just for you!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {/* <!-- Offer Card --> */}
        <div
          className="hero min-w-min p-4 justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${romanticOffer})`,
          }}
        >
          <div className="max-w-md relative flex flex-col border-2 border-secondary p-5 pr-40 items-start justify-between text-start text-white gap-44">
            <div>
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
                Save 25%
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold">Romantic Getaway Package</h2>
              <p className="text-3xl font-bold">
                Includes a complimentary dinner and spa session for two.
              </p>
              <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                Book Now <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Add more offer cards --> */}
        <div
          className="hero min-w-min p-4 justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${familyOffer})`,
          }}
        >
          <div className="max-w-md relative flex flex-col border-2 border-secondary p-5 pr-40 items-start justify-between text-start text-white gap-44">
            <div>
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
                Save 20%
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold">Family Vacation Deal</h2>
              <p className="text-3xl font-bold">
                Stay 3 nights, pay for 2! Perfect for families with kids.
              </p>
              <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                Book Now <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Add another offer card --> */}
        <div
          className="hero min-w-min p-4 justify-start"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${luxuryOffer})`,
          }}
        >
          <div className="max-w-md relative flex flex-col border-2 border-secondary p-5 pr-40 items-start justify-between text-start text-white gap-44">
            <div>
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
                Limited Time
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold">Luxury Suite Offer</h2>
              <p className="text-3xl font-bold">
                Book a luxury suite and get a free airport transfer.
              </p>
              <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                Book Now <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
