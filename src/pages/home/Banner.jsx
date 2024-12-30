import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/hotel-banner1.jpg";
import banner2 from "../../assets/hotelbanner2.jpg";
import banner3 from "../../assets/hotelbanner3.webp";
import banner4 from "../../assets/hotelbanner4.avif";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-10 text-center py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px] sm:h-[400px] sm:object-cover md:h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner1})`,
          }}
        >
          <div className="py-20">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Discover Luxurious Living
                </h1>
                <p className="mb-5">
                  Step into a world of refined elegance where every detail is
                  designed to provide unmatched comfort. Our premium residences
                  redefine modern living with sophisticated interiors, serene
                  surroundings, and state-of-the-art facilities.
                </p>
                <Link
                  to="/all-rooms"
                  className="btn bg-transparent rounded-none border border-light hover:bg-secondary hover:border-none text-light text-2xl"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner2})`,
          }}
        >
          <div className="py-20">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Your Dream Stay Awaits
                </h1>
                <p className="mb-5">
                  Immerse yourself in a sanctuary of tranquility and style. Our
                  exclusive villas offer spacious layouts, exquisite decor, and
                  breathtaking views, making every moment truly unforgettable.
                </p>
                <Link
                  to="/all-rooms"
                  className="btn bg-transparent rounded-none border border-light hover:bg-secondary hover:border-none text-light text-2xl"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner3})`,
          }}
        >
          <div className="py-20">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Unparalleled Comfort & Style
                </h1>
                <p className="mb-5">
                  Experience the ultimate in relaxation with our thoughtfully
                  curated suites. Featuring plush furnishings, modern amenities,
                  and personalized services, every stay feels like a retreat
                  into luxury.
                </p>
                <Link
                  to="/all-rooms"
                  className="btn bg-transparent rounded-none border border-light hover:bg-secondary hover:border-none text-light text-2xl"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide
          className="hero min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner4})`,
          }}
        >
          <div className="py-20">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  {" "}
                  Elevate Your Living Experience
                </h1>
                <p className="mb-5">
                  Discover a lifestyle that blends convenience and
                  sophistication. From world-class facilities to panoramic
                  views, our properties are designed to inspire and delight at
                  every turn.
                </p>
                <Link
                  to="/all-rooms"
                  className="btn bg-transparent rounded-none border border-light hover:bg-secondary hover:border-none text-light text-2xl"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
