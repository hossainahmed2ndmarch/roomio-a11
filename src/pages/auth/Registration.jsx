import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createNewUser, setUser, updateUserProfile, signUpWithGoogle } =
    useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = location.state || "/";

  // Validation Errors
  const validateForm = (data) => {
    const { name, photo, email, password, confirmPassword, terms } = data;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!photo) newErrors.photo = "Photo URL is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) {
      newErrors.password = "Password is required.";
    } else {
      if (password.length < 6)
        newErrors.password = "Password must be at least 6 characters long.";
      const passwordPattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordPattern.test(password))
        newErrors.password =
          "Password must contain at least one uppercase, one lowercase, one special character, and one number.";
    }
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!terms) newErrors.terms = "You must accept the terms and conditions.";

    return newErrors;
  };

  // Submit Functionality

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      photo: form.get("photo"),
      email: form.get("email"),
      password: form.get("password"),
      confirmPassword: form.get("confirmPassword"),
      terms: form.get("terms"),
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Firebase user creation
    createNewUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        updateUserProfile({ displayName: data.name, photoURL: data.photo })
          .then(() => {
            toast.success(
              `🎉 Registration successful! Welcome ${user.displayName}!`,
              {
                icon: "🚀",
              }
            );
            navigate(from);
          })
          .catch((error) => {
            // console.error("Profile Update Error: ", error);
            toast.error("Profile update failed. Please try again.");
          });
      })
      .catch((error) => {
        setErrors({ form: "Error creating account: " + error.message });
        toast.error("🚨 Account creation failed: " + error.message);
      });
  };

  // Google sign up
  const handleGoogleSignUp = () => {
    signUpWithGoogle().then((res) => {
      // console.log(res);
      navigate(from);
    });
    // .catch((error) => console.log("ERROR", error.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <Helmet>
        <title>Register | ROOMIO</title>
      </Helmet>
      <div className="card w-full max-w-2xl p-2 md:p-[76px] shrink-0">
        <h2 className="text-4xl font-semibold text-blackLight text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
              required
            />
            {errors.name && (
              <p className="text-red-600 text-sm font-semibold">
                {errors.name}
              </p>
            )}
          </div>
          {/* Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Drop your photo url"
              className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
              required
            />
            {errors.photo && (
              <p className="text-red-600 font-semibold text-sm">
                {errors.photo}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
              required
            />
            {errors.email && (
              <p className="text-red-600 font-semibold text-sm">
                {errors.email}
              </p>
            )}
          </div>
          {/* Password Create */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Create Your Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs bg-transparent hover:bg-transparent text-blackLight shadow-none border-none absolute right-2 top-14"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {errors.password && (
              <p className="text-red-600 font-semibold text-sm">
                {errors.password}
              </p>
            )}
          </div>
          {/* Password Confirm */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Confirm Your Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Enter your password"
              className="input input-bordered w-full md:w-auto rounded-none border border-secondary"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs bg-transparent hover:bg-transparent text-blackLight shadow-none border-none absolute right-2 top-14"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-600 font-semibold text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* Terms and Conditions */}
          <div className="form-control">
            <label className="label justify-start cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checked:bg-navyText border-2 border-blackLight checkbox-primary outline-navyText"
              />
              <span className="label-text text-blackLight font-semibold ml-4">
                Accept our{" "}
                <Link className="underline" to='/terms-conditions'>
                  terms
                </Link>{" "}
                and{" "}
                <Link to='/terms-conditions' className="underline" href="">
                  conditions
                </Link>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-600 font-semibold text-sm">
                {errors.terms}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none bg-primary text-light rounded-none hover:text-blackLight w-full">
              Register
            </button>
          </div>
          {errors.form && (
            <p className="text-red-600 font-semibold text-center mt-4">
              {errors.form}
            </p>
          )}
          <div className="form-control mt-6">
            <h5 className="text-3xl font-semibold text-blackLight text-center mb-6">
              Or
            </h5>
            <button
              onClick={handleGoogleSignUp}
              className="btn border-none bg-primary text-light rounded-none hover:text-blackLight w-full"
            >
              <FaGoogle></FaGoogle>{" "}
              <span className="hidden md:flex">Sign Up With Google</span>
            </button>
          </div>
        </form>

        <p className="font-semibold text-blackLight text-center">
          Already Have An Account ?{" "}
          <Link to={"/login"} className="text-[#F75B5F]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
