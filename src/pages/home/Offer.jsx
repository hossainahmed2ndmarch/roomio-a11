import React from "react";
import romanticOffer from "../../assets/rooms/romanticoffer.webp";
import familyOffer from "../../assets/rooms/family offerwebp.webp";
import luxuryOffer from "../../assets/rooms/luxaryoffer.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section className="my-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blackLight">
          Unmissable Deals for Your Perfect Getaway
        </h2>
        <p className="text-base md:text-lg text-primary font-medium">
          Book now and save big on your next dream vacation. Limited-time offers
          just for you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Offer Cards */}
        {[
          {
            image: romanticOffer,
            discount: "Save 25%",
            title: "Romantic Getaway Package",
            description:
              "Includes a complimentary dinner and spa session for two.",
          },
          {
            image: familyOffer,
            discount: "Save 20%",
            title: "Family Vacation Deal",
            description:
              "Stay 3 nights, pay for 2! Perfect for families with kids.",
          },
          {
            image: luxuryOffer,
            discount: "Limited Time",
            title: "Luxury Suite Offer",
            description: "Book a luxury suite and get a free airport transfer.",
          },
        ].map((offer, index) => (
          <div
            key={index}
            className="hero flex flex-col flex-grow min-w-min min-h-[500px] p-4 justify-start bg-cover bg-center "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${offer.image})`,
            }}
          >
            <div className="relative flex flex-col flex-grow border-2 border-secondary text-white p-5 ">
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs md:text-sm font-bold py-1 px-3 rounded">
                {offer.discount}
              </div>

              {/* Push content to bottom */}
              <div className="flex-grow"></div>

              {/* Offer Content */}
              <div className="mt-auto">
                <h2 className="text-lg md:text-xl font-bold">{offer.title}</h2>
                <p className="text-sm md:text-lg">{offer.description}</p>
                <Link to="/packages-offers">
                  <button className="flex flex-row items-center space-x-2 border-b-2 border-secondary mt-4 text-sm md:text-base">
                    Book Now <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
