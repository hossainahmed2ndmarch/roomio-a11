import React from "react";
import Offer from "../home/Offer";
import Packages from "../home/Packages";
import { Helmet } from "react-helmet-async";

const PackagesOffers = () => {
  return (
    <div className="mt-24 px-6">
      <Helmet>
        <title>Offers & Packages | ROOMIO</title>
      </Helmet>
      <Offer></Offer>
      <Packages></Packages>
    </div>
  );
};

export default PackagesOffers;
