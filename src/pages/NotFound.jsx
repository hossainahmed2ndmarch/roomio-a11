import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-light">
      <div className="text-center p-8 bg-primary rounded-2xl shadow-lg max-w-lg w-full border border-gray-200">
        <h1 className="text-7xl font-bold text-light mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-light opacity-90 mb-6">
          Oops! Page not found.
        </h2>
        <p className="text-light mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn mt-6 bg-light border-none rounded-none text-blackLight"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
