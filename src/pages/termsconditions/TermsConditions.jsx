import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <section className="px-6 py-10 mt-24 text-darkLight">
      <Helmet>
        <title>Terms & Conditions | ROOMIO</title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-light shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-4xl font-bold text-center text-blackLight mb-6">
          Terms & Conditions
        </h2>
        <p className="text-center text-primary mb-8">
          Please read these terms and conditions carefully before booking.
        </p>

        {/* Terms List */}
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold text-secondary">
              1. Booking Policy
            </h3>
            <p className="text-blackLight">
              Reservations are subject to availability. Full payment or a
              deposit is required at the time of booking.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold text-secondary">
              2. Cancellation & Refunds
            </h3>
            <p className="text-blackLight">
              Cancellations made within 24 hours of check-in are non-refundable.
              Refunds (if applicable) may take up to 7-10 business days.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold text-secondary">
              3. Check-in & Check-out
            </h3>
            <p className="text-blackLight">
              Check-in time: 2:00 PM | Check-out time: 11:00 AM. Late check-outs
              may incur additional charges.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold text-secondary">
              4. Guest Responsibilities
            </h3>
            <p className="text-blackLight">
              Guests are responsible for any damages to the property. Smoking is
              prohibited in non-smoking rooms.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold text-secondary">
              5. Privacy Policy
            </h3>
            <p className="text-blackLight">
              Your personal data is collected only for booking purposes and is
              kept confidential as per our privacy policies.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="text-center mt-8">
          <Link to="/">
            <button className="btn bg-primary text-light py-2 px-6 rounded-none hover:text-blackLight  transition">
              Accept & Continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
