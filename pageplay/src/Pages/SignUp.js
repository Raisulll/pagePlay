import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import x2412205069043541 from "../assets/images/24122050-6904354-1.png";
import x100289701 from "../assets/images/ai-image.svg";
import logo from "../assets/images/book.png";
import email2 from "../assets/images/email.png";
import group15 from "../assets/images/group-15.png";
import { default as hide1 } from "../assets/images/hide-1.png";
import hide2 from "../assets/images/hide-2.png";
import lock1 from "../assets/images/lock-1.png";
import telephone1 from "../assets/images/telephone.png";
import { default as user1, default as user2 } from "../assets/images/user.png";
import userSignin1 from "../assets/images/user-signin-1.png";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-[#d4e0b4] min-h-screen flex flex-col items-center justify-center">
      {/* Logo and Header */}
      <div className="absolute top-5 left-5 flex items-center">
        <img className="w-12 h-12 sm:w-16 sm:h-16 object-cover" alt="Logo" src={logo} />
        <span className="ml-4 text-lg sm:text-xl font-semibold text-[#265073]">
          PagePlay
        </span>
      </div>

      {/* User Sign-In Button */}
      <div className="absolute top-5 right-5 flex items-center space-x-2 sm:space-x-4">
        <span
          className="text-sm sm:text-lg font-semibold text-black cursor-pointer"
          onClick={handleSignIn}
        >
          Log in
        </span>
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 object-cover cursor-pointer"
          alt="User Signin"
          src={userSignin1}
          onClick={handleSignIn}
        />
      </div>

      {/* Sign-Up Form */}
      <div className="w-full max-w-md lg:max-w-4xl mx-auto px-4">
        <div className="bg-[#a4c0ed] p-6 sm:p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-xl sm:text-2xl font-bold text-black">
            Welcome to PagePlay
          </h1>
          <h2 className="text-center text-lg sm:text-xl font-semibold text-black mt-4">
            Sign up to continue
          </h2>

          <form
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
            onSubmit={handleSubmit}
          >
            {/* Input Fields */}
            <div className="flex items-center bg-white rounded-full p-2">
              <img className="w-5 h-5 mx-2" alt="User" src={user1} />
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2">
              <img className="w-5 h-5 mx-2" alt="User" src={user2} />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2">
              <img className="w-5 h-5 mx-2" alt="Email" src={email2} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2">
              <img className="w-5 h-5 mx-2" alt="Phone" src={telephone1} />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
            </div>

            {/* Password Fields */}
            <div className="flex items-center bg-white rounded-full p-2 relative">
              <img className="w-5 h-5 mx-2" alt="Lock" src={lock1} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
              <img
                className="w-5 h-5 cursor-pointer absolute right-3"
                alt="Hide"
                src={showPassword ? hide2 : hide1}
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2 relative">
              <img className="w-5 h-5 mx-2" alt="Lock" src={lock1} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-none outline-none text-base sm:text-lg p-2"
              />
              <img
                className="w-5 h-5 cursor-pointer absolute right-3"
                alt="Hide"
                src={showConfirmPassword ? hide2 : hide1}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#294180] text-white py-2 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-medium"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* Already Have Account */}
          <p className="text-center mt-4 text-sm sm:text-base">
            Already have an account?{" "}
            <span
              className="text-[#265073] cursor-pointer"
              onClick={handleSignIn}
            >
              Sign in
            </span>
          </p>

          {/* Decorative Images */}
          <img
              className="absolute hidden lg:block w-[412px] h-[356px] top-[335px] left-[1120px]"
              alt="Group"
              src={group15}
            />

            <img
              className="absolute hidden lg:block w-[225px] h-[330px] top-0 left-[1025px] object-cover"
              alt="Element"
              src={x2412205069043541}
            />
            <img
              style={{ left: "-50px" }}
              className="absolute hidden lg:block w-[400px] h-[265px] top-[428px] left-0"
              alt="Element"
              src={x100289701}
            />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
