import React from "react";
import banner1 from "../../assets/hotel-banner1.jpg";
import banner2 from "../../assets/hotelbanner2.jpg";
import banner3 from "../../assets/hotelbanner3.webp";
import banner4 from "../../assets/hotelbanner4.avif";
import banner5 from "../../assets/diningare.jpg";
import banner6 from "../../assets/hotelview.jpg";
import banner7 from "../../assets/bar.jpg";
import banner8 from "../../assets/event.jpg";
import banner9 from "../../assets/spa.jpg";
import banner10 from "../../assets/resort.jpg";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const images = [
    { src: banner1, title: "ROOMIO" },
    { src: banner4, title: "POOL" },
    { src: banner2, title: "ROOM" },
    { src: banner3, title: "Luxury Room" },
    { src: banner5, title: "Dining Area" },
    { src: banner6, title: "Hotel View" },
    { src: banner7, title: "Bar" },
    { src: banner8, title: "Event Hall" },
    { src: banner9, title: "Spa" },
    { src: banner10, title: "Resort" },
  ];

  return (
    <section className="mt-24 mb-10 px-6">
      <Helmet>
        <title>Gallery | ROOMIO</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center text-blackLight mb-8">
        Explore Our Gallery
      </h2>
      <p className="text-center text-primary mb-10">
        A glimpse of our luxurious rooms, amenities, and exclusive events.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((img, index) => (
            <div
              key={index}
              className="relative h-48 hover:scale-105 transition overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-2 left-2 text-light text-lg font-bold bg-black/50 px-2 py-1 rounded">
                {img.title}
              </div>
            </div>
          ))}
        </div>

        {/* Middle Column - One Large Image */}
        <div
          className="relative h-[400px] md:h-[500px] lg:h-auto hover:scale-105 transition overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${images[0].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-2 left-2 text-light text-lg font-bold bg-black/50 px-2 py-1 rounded">
            {images[0].title}
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(6).map((img, index) => (
            <div
              key={index}
              className="relative h-48 hover:scale-105 transition overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-2 left-2 text-light text-lg font-bold bg-black/50 px-2 py-1 rounded">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
