import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogIn, setUser, signUpWithGoogle, setResetEmail } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const [showPassword, setShowPassword] = useState(false);

  // Validation Input Field
  const validateForm = (email, password) => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  // Submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validationErrors = validateForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    // Login
    userLogIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        e.target.reset();
        toast.success(`🎉 Welcome back! ${user?.displayName} Happy visit!`);
        navigate(from);
      })
      .catch((err) => {
        const errorMessage =
          err.code === "auth/wrong-password"
            ? "Incorrect password. Please try again."
            : err.message;
        setError({ login: errorMessage });
      });
  };

  // Sign up with Google
  const handleGoogleSignUp = () => {
    signUpWithGoogle().then((res) => {
      toast.success("🎉 Welcome! Your Google signup was successful!", {
        icon: "🌟",
      });
      navigate(from);
    });
  };

  // Forgot password functionality
  const handleForgotPasswordRedirect = (e) => {
    e.preventDefault();
    const email = document.querySelector("input[name='email']").value;
    setResetEmail(email);
    navigate("/auth/forgot-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-8">
      <Helmet>
        <title>Login | ROOMIO</title>
      </Helmet>
      <div className="card w-full max-w-lg p-6 md:p-12 flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-blackLight text-center mb-6">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="form-control mb-4">
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
            {error.email && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-control relative mb-6">
            <label className="label">
              <span className="label-text text-xl text-blackLight font-semibold">
                Password
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
              className="btn btn-xs bg-transparent hover:bg-transparent text-blackLight shadow-none border-none absolute right-4 top-14"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.password && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.password}
              </p>
            )}
            {error.login && (
              <p className="text-red-600 text-sm mt-2 font-semibold">
                {error.login}
              </p>
            )}
            <label className="label">
              <a
                href="#"
                onClick={handleForgotPasswordRedirect}
                className="label-text-alt text-blackLight font-semibold link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn border-none bg-primary text-light rounded-none hover:text-blackLight w-full">
              Login
            </button>
          </div>

          {/* Google Signup Button */}
          <div className="form-control mt-6">
            <h5 className="text-3xl font-semibold text-blackLight text-center mb-6">
              Or
            </h5>
            <button
              onClick={handleGoogleSignUp}
              className="btn border-none bg-primary text-light rounded-none hover:text-blackLight w-full"
            >
              <FaGoogle />
              <span className="ml-2">Sign Up With Google</span>
            </button>
          </div>
        </form>
        <p className="font-semibold text-blackLight text-center mt-6">
          Don’t Have An Account?{" "}
          <Link to={"/registration"} className="text-[#F75B5F]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
