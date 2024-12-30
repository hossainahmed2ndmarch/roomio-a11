import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import userIcon from "../assets/user.png";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { FaPlaneDeparture } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  // Log out
  const handleLogOut = () => {
    toast.info("🚪 You have successfully logged out. See you soon!", {
      icon: "👋",
    });
    navigate("/");
    logOut(navigate);
  };

  // Nav links
  const links = (
    <>
      <NavLink
        className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
        to="/all-rooms"
      >
        Rooms
      </NavLink>
      {user && user?.email && (
        <>
          <NavLink
            className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
            to="/my-bookings"
          >
            My Bookings
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-lg rounded-b-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-3xl text-primary" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          {/* <!-- Logo Text --> */}
          <a className="text-3xl text-primary tracking-[5px]">
            R<span class="text-secondary">OO</span>MIO
          </a>

          {/* <!-- Star Section --> */}
          <div className="flex space-x-1 mt-2">
            <span className="text-secondary text-lg">★</span>
            <span className="text-secondary text-lg">★</span>
            <span className="text-secondary text-lg">★</span>
            <span className="text-secondary text-lg">★</span>
            <span className="text-secondary text-lg">★</span>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        {user && user?.email ? (
          <Link
            to="/my-profile"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content={`Logged in as ${user.displayName || "User"}`}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Icon"
                className="object-cover"
                src={user.photoURL || userIcon}
              />
            </div>
          </Link>
        ) : (
          <NavLink
            to={"/registration"}
            data-tooltip-id="register-tooltip"
            data-tooltip-content="Register your account"
            className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
          >
            Register
          </NavLink>
        )}

        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            data-tooltip-id="logout-tooltip"
            data-tooltip-content="Log Out"
            className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
          >
            Log-Out
          </button>
        ) : (
          <NavLink
            to={"/login"}
            data-tooltip-id="login-tooltip"
            data-tooltip-content="Log in to your account"
            className="btn rounded-none hover:bg-primary hover:text-light font-semibold bg-transparent border border-secondary"
          >
            LogIn
          </NavLink>
        )}
      </div>
      <Tooltip id="profile-tooltip" place="bottom" />
      <Tooltip id="register-tooltip" place="bottom" />
      <Tooltip id="logout-tooltip" place="bottom" />
      <Tooltip id="login-tooltip" place="bottom" />
    </div>
  );
};

export default Navbar;
