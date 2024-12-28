import React from "react";
import { useNavigate } from "react-router-dom";

// Import assets
import book1 from "../assets/images/book.png"; // Replace with your actual path
import searchImg from "../assets/images/search.png"; // Replace with your actual path
import userSignin1 from "../assets/images/user-signin-1.png"; // Replace with your actual path

const Nav = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg- shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img className="w-12 h-12 object-cover" alt="Book" src={book1} />
        <span className="font-semibold text-[#265073] text-xl">PagePlay</span>
      </div>

      <form className="searchForm flex items-center">
        {/* Hidden on small screens */}
        <input
          className="h-10 bg-[#ffffff] w-[400px] px-4 rounded-l-md border-l-2 border-t-2 border-b-2 border-blue-400 hidden md:block"
          type="search"
          placeholder="Search Book..."
          autoComplete="off"
        />
        {/* Always visible search button */}
        <button
          className="h-10 bg-green-500 w-14 grid place-items-center rounded-r-md border-r-2 border-t-2 border-b-2 border-blue-400"
          type="submit"
        >
          <img className="w-6 h-6" src={searchImg} alt="Search Icon" />
        </button>
      </form>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <div className="font-semibold text-black text-sm lg:text-lg cursor-pointer">
          About Us
        </div>
        <div
          className="font-semibold text-black text-sm lg:text-lg cursor-pointer"
          onClick={handleLoginClick}
        >
          Login
        </div>
        <img
          className="w-10 h-10 object-cover cursor-pointer ring-2 rounded-full"
          alt="User signin"
          src={userSignin1}
          onClick={handleSignupClick}
        />
      </div>
    </nav>
  );
};

export default Nav;
