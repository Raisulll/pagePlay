import React from "react";
import { useNavigate } from "react-router-dom";
import aiImage from "../assets/images/ai-image.svg";
import book1 from "../assets/images/book.png";
import userSignin1 from "../assets/images/user-signin-1.png";

export const StartingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-[#d4e0b4] min-h-screen">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12 object-cover" alt="Book" src={book1} />
          <span className="font-semibold text-[#265073] text-xl">PagePlay</span>
        </div>

        <div className="flex items-center space-x-6">
          <div
            className="font-semibold text-black text-sm lg:text-lg cursor-pointer"
            onClick={handleLoginClick}
          >
            Log in
          </div>
          <div className="font-semibold text-black text-sm lg:text-lg">
            About Us
          </div>
          <img
            className="w-10 h-10 object-cover cursor-pointer ring-2 rounded-full"
            alt="User signin"
            src={userSignin1}
            onClick={handleSignupClick}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-20 mt-10">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0">
          <h1 className="font-extrabold text-black text-4xl lg:text-6xl leading-tight">
            Discover Your <br />
            <span className="text-[#443d93]">
              Favourite Books
              <span className="text-black"> From</span>
            </span>
            <br />
            <span className="text-black">PagePlay</span>
          </h1>
          <p className="font-semibold text-black text-sm lg:text-lg">
            PagePlay is one of the biggest online book libraries, containing
            over 20,000+ books. You can explore a vast collection of eBooks,
            available for all book lovers. Visit our site regularly to discover
            and read your favorite PDF books online!
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center relative  lg:top-[100px]">
          <img
            className="w-full lg:w-full max-h-[400px] object-contain"
            alt="AI illustration"
            src={aiImage}
          />
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
