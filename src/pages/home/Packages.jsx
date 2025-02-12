import ski from "../../assets/ski.jpg";
import hiking from "../../assets/hiking.jpg";
import paragliding from "../../assets/paraglidinng.jpg";
import golf from "../../assets/golf.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-blackLight mb-4">
          Adventurous Holiday Packages
        </h2>
        <p className="text-lg text-primary mb-8">
          Discover the Adventure of a Lifetime
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div
            className="hero min-w-min p-4 "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hiking})`,
            }}
          >
            <div className="max-w-md flex flex-col border-2 border-secondary p-5 pr-40 items-start justify-between text-start text-white gap-44">
              <div>
                <button className="btn bg-light rounded-none outline-none">
                  $180/Person
                </button>
              </div>

              <div>
                <h2 className="text-xl font-bold">OUTDOORS</h2>
                <h3 className="text-3xl font-bold">Winter Hiking</h3>
                <Link to="/packages-offers">
                  <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                    Discover Trip <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="hero min-w-min p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${paragliding})`,
            }}
          >
            <div className="max-w-md flex flex-col border-2 border-secondary p-5 pr-40 items-start justify-between text-start text-white gap-44">
              <div>
                <button className="btn bg-light rounded-none outline-none">
                  $180/Person
                </button>
              </div>

              <div>
                <h2 className="text-xl font-bold">OUTDOORS</h2>
                <h3 className="text-3xl font-bold">Paraglider Exercise</h3>
                <Link to="/packages-offers">
                  <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                    Discover Trip <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="hero min-w-min p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${golf})`,
            }}
          >
            <div className="max-w-md flex flex-col border-2 border-secondary p-5  pr-40 items-start justify-between text-start text-white gap-44">
              <div>
                <button className="btn bg-light rounded-none outline-none">
                  $180/Person
                </button>
              </div>

              <div>
                <h2 className="text-xl font-bold">OUTDOORS</h2>
                <h3 className="text-3xl font-bold">Golf Courses</h3>
                <Link to="/packages-offers">
                  <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                    Discover Trip <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div
            className="hero min-w-min p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ski})`,
            }}
          >
            <div className="max-w-md flex flex-col border-2 border-secondary p-5 pr-32 items-start justify-between text-start text-white gap-44">
              <div>
                <button className="btn bg-light rounded-none outline-none">
                  $180/Person
                </button>
              </div>

              <div>
                <h2 className="text-xl font-bold">OUTDOORS</h2>
                <h3 className="text-3xl font-bold">Ski & Snowshoeing</h3>
                <Link to="/packages-offers">
                  <button className="flex flex-row items-center space-x-4 border-b-2 border-b-secondary">
                    Discover Trip <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
