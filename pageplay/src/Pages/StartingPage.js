import React from "react";
import { useNavigate } from "react-router-dom";
import aiImage from "../assets//images/ai-image.svg";
import book1 from "../assets/images/book.png";
import userSignin1 from "../assets/images/user-signin-1.png";

export const StartingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  }
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="bg-[#d4e0b4] flex flex-row justify-center w-full">
      <div className="bg-[#d4e0b4] w-[1535px] h-[768px] relative">
        <div className="absolute w-[1506px] h-28 top-[13px] left-2.5">
          <img
            className="absolute w-[76px] h-[90px] top-2.5 left-4 object-cover"
            alt="Book"
            src={book1}
          />

          <div className="absolute w-[131px] top-[35px] left-[92px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#265073] text-2xl tracking-[0] leading-[normal]">
            PagePlay
          </div>

          <img
            className="absolute w-[54px] h-[53px] top-[29px] left-[1438px] object-cover cursor-pointer"
            alt="User signin"
            src={userSignin1}
            onClick={handleSignupClick}
          />
          <div
            className="absolute top-[38px] left-[1319px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal] cursor-pointer"
            onClick={handleLoginClick}
          >
            Log in
          </div>

          <div className="absolute top-[38px] left-[1168px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
            About Us
          </div>
        </div>

        <div className="absolute w-[1446px] h-[518px] top-[177px] left-10">
          <img
            className="absolute w-[640px] h-[442px] top-[76px] left-[806px]"
            alt="Ai image"
            src={aiImage}
          />

          <div className="absolute w-[828px] h-[451px] top-0 left-0">
            <p className="absolute w-[730px] h-[120px] top-[262px] left-10 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[19px] tracking-[0] leading-[normal]">
              PagePlay is one of the biggest online book libraries, containing
              over 20,000+ books. You can explore a vast collection of eBooks,
              available for all book lovers. Visit our site regularly to
              discover and read your favorite PDF books online!
            </p>

            <p className="absolute w-[623px] top-[-13px] left-10 [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-transparent text-[55px] tracking-[0] leading-[normal]">
              <span className="text-black">
                Discover Your
                <br />
              </span>

              <span className="text-[#443d93]">Favourite Books</span>

              <span className="text-black"> From PagePlay</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
