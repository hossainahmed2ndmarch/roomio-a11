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
      icon: <FaCar />,
      title: "Airport Pick-up Service",
      description:
        "Experience seamless arrivals with our airport pick-up service.",
    },
    {
      icon: <FaWifi />,
      title: "Wi-Fi & Internet",
      description: "Stay connected anywhere with our high-speed Wi-Fi.",
    },
    {
      icon: <FaUtensils />,
      title: "Breakfast in Bed",
      description: "Enjoy a luxurious morning with breakfast in bed.",
    },
    {
      icon: <FaBroom />,
      title: "Housekeeping Services",
      description: "Spotless rooms with professional housekeeping.",
    },
    {
      icon: <FaTshirt />,
      title: "Laundry Services",
      description: "Convenient laundry services for your wardrobe.",
    },
    {
      icon: <FaSwimmer />,
      title: "Swimming Pool",
      description: "Relax and unwind in our stunning pool area.",
    },
  ];

  return (
    <section className="py-16 my-10 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-light mb-4">
          Discover the Services We Offer
        </h2>
        <p className="text-lg text-secondary mb-8">The Essentials</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-6 space-x-4">
              <div className="text-secondary text-5xl mb-4">{service.icon}</div>
              <div>
                <h3 className="text-2xl text-left text-light font-semibold mb-2">
                  {service.title} 
                </h3>
                <p className="text-light text-left">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
