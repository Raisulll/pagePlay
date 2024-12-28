import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import email2 from "../assets/images/email.png";
import line12 from "../assets/images/line-13.svg";
import resetPassword1 from "../assets/images/reset-password.png";
import logo from "../assets/images/book.png";
export const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/otp");
  }
  return (
    <div className="bg-[#d4e0b4] flex flex-row items-center  justify-center w-full min-h-screen">
      <img
        className="absolute w-[76px] h-[90px] top-5 left-[200px] object-cover"
        alt="Logo"
        src={logo}
      />

      <div className="absolute w-[131px] top-[50px] left-[280px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#265073] text-2xl tracking-[0] leading-[normal] cursor-pointer">
        PagePlay
      </div>
      <div className="bg-[#d4e0b4] w-[1000px] h-[550px] relative border-[#d4e0b4] rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <p className="absolute top-[200px] w-full [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-base text-center tracking-[0] leading-[normal] text-center">
          Please provide the email address that you used when you signed up for
          your account.
        </p>
        <div className="absolute top-[101px] left-[321px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[34px] tracking-[0] leading-[normal]">
          Reset your Password
        </div>
        <div className="absolute w-[600px] h-[55px] top-[250px] left-[200px] bg-white rounded-[40px] overflow-hidden">
          <div className="absolute top-[13px] left-[71px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"></div>
          <img
            className="absolute w-[22px] h-[22px] top-4 left-[18px] object-cover"
            alt="Email"
            src={email2}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="absolute top-[15px] left-[50px] w-[550px] border-none outline-none font-medium text-black text-lg pr-10"
          />
        </div>
        <p className="absolute top-[320px] w-full [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] text-center">
          We will send you an email that will allow you to reset your password.
        </p>
        <div className="absolute w-[140px] h-10 top-[360px] bg-[#294180] left-[430px] rounded-[50px]">
          <div
            className="text-center [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] cursor-pointer h-[40px] pt-[10px]"
            onClick={handleSubmit}
          >
            Send OTP
          </div>
        </div>
        <img
          className="absolute w-[50px] h-[50px] top-7 left-[475px] object-cover"
          alt="Reset password"
          src={resetPassword1}
        />
      </div>
    </div>
  );
};

export default ForgotPass;
