import React from "react";

const Offer = () => {
  return (
    <section class="special-offers bg-gradient-to-b from-[#fef3e6] to-[#ffffff] py-16">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-[#5c4b51]">
          Unmissable Deals for Your Perfect Getaway
        </h2>
        <p class="text-lg text-[#5c4b51] mt-4">
          Book now and save big on your next dream vacation. Limited-time offers
          just for you!
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {/* <!-- Offer Card --> */}
        <div class="offer-card relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Special Offer"
            class="w-full h-60 object-cover"
          />
          <div class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
            Save 25%
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#5c4b51]">
              Romantic Getaway Package
            </h3>
            <p class="text-sm text-[#5c4b51] mt-2">
              Includes a complimentary dinner and spa session for two.
            </p>
            <button class="mt-4 w-full py-2 text-white bg-[#008080] hover:bg-[#006666] rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
        {/* <!-- Add more offer cards --> */}
        <div class="offer-card relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Special Offer"
            class="w-full h-60 object-cover"
          />
          <div class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
            Save 20%
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#5c4b51]">
              Family Vacation Deal
            </h3>
            <p class="text-sm text-[#5c4b51] mt-2">
              Stay 3 nights, pay for 2! Perfect for families with kids.
            </p>
            <button class="mt-4 w-full py-2 text-white bg-[#008080] hover:bg-[#006666] rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
        {/* <!-- Add another offer card --> */}
        <div class="offer-card relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Special Offer"
            class="w-full h-60 object-cover"
          />
          <div class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded">
            Limited Time
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#5c4b51]">
              Luxury Suite Offer
            </h3>
            <p class="text-sm text-[#5c4b51] mt-2">
              Book a luxury suite and get a free airport transfer.
            </p>
            <button class="mt-4 w-full py-2 text-white bg-[#008080] hover:bg-[#006666] rounded-lg transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
