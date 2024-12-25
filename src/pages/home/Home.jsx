import React from "react";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import Offer from "./Offer";
import Services from "./Services";
import Packages from "./Packages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HotelMap></HotelMap>
      <Offer></Offer>
      <Services></Services>
      <Packages></Packages>
    </div>
  );
};

export default Home;
