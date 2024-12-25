import {
  FaCar,
  FaWifi,
  FaUtensils,
  FaBroom,
  FaTshirt,
  FaSwimmer,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCar className="text-amber-500 text-4xl mb-4" />,
      title: "Airport Pick-up Service",
      description:
        "Experience seamless arrivals with our airport pick-up service.",
    },
    {
      icon: <FaWifi className="text-amber-500 text-4xl mb-4" />,
      title: "Wi-Fi & Internet",
      description: "Stay connected anywhere with our high-speed Wi-Fi.",
    },
    {
      icon: <FaUtensils className="text-amber-500 text-4xl mb-4" />,
      title: "Breakfast in Bed",
      description: "Enjoy a luxurious morning with breakfast in bed.",
    },
    {
      icon: <FaBroom className="text-amber-500 text-4xl mb-4" />,
      title: "Housekeeping Services",
      description: "Spotless rooms with professional housekeeping.",
    },
    {
      icon: <FaTshirt className="text-amber-500 text-4xl mb-4" />,
      title: "Laundry Services",
      description: "Convenient laundry services for your wardrobe.",
    },
    {
      icon: <FaSwimmer className="text-amber-500 text-4xl mb-4" />,
      title: "Swimming Pool",
      description: "Relax and unwind in our stunning pool area.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Discover the Services We Offer
        </h2>
        <p className="text-lg text-amber-600 mb-8">The Essentials</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
