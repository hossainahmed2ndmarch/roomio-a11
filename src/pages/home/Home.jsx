import React from "react";
import Banner from "./Banner";
import HotelMap from "./HotelMap";
import Offer from "./Offer";
import Services from "./Services";
import Packages from "./Packages";
import FeatureRooms from "./FeatureRooms";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
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
