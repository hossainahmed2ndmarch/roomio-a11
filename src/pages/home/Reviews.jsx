import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://roomio-a11-server.vercel.app/reviews/home")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-blackLight text-center">Guest Experiences</h2>
      <p className="text-primary text-center">
        Discover what our valued guests have to say about their unforgettable <br />
        stays, from exceptional service to luxurious rooms <br />
        and memorable amenities.
      </p>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000, // Adjust the autoplay delay in milliseconds (3 seconds here)
            disableOnInteraction: false, // Keeps autoplay even after user interaction
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, Autoplay]}
          className="review-carousel"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review?._id}>
              <ReviewCard reviewData={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
