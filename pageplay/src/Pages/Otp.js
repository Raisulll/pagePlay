import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import line13 from "../assets/images/line-13.svg";
import password1 from "../assets/images/password-1.png";

export const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  // Focus on the next input field
  const handleFocus = (e, index) => {
    if (e.target.value.length === 1 && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className="bg-[#d4e0b4] min-h-screen flex items-center justify-center">
      <div className="w-[1000px] h-[597px] relative border border-[#d4e0b4] rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        {/* Password Icon */}
        <img
          className="absolute w-[70px] h-[70px] top-[31px] left-[465px] object-cover"
          alt="Password"
          src={password1}
        />

        {/* Left Divider Line */}
        <img
          className="absolute w-2.5 h-[223px] top-[187px] left-[117px]"
          alt="Line"
          src={line13}
        />

        {/* OTP Verification Text */}
        <div className="absolute top-[243px] left-[151px] font-medium text-black text-4xl tracking-[0] leading-[normal]">
          OTP <br /> Verification
        </div>

        {/* OTP Entry Box */}
        <div className="w-[422px] h-[326px] top-[162px] left-[500px] absolute border border-solid border-[#d4e0b4]">
          <div className="absolute top-[17px] left-[88px] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
            Enter OTP Code
          </div>

          {/* OTP Digits Box */}
          <div className="absolute w-[340px] h-[35px] top-[117px] left-[41px] flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onFocus={(e) => e.target.select()} // Select input value on focus
                onInput={(e) => handleFocus(e, index)} // Focus on the next input field
                className="w-[35px] h-[35px] bg-[#d5d5d5] border border-solid border-black text-center text-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {/* Verify OTP Button */}
          <div
            className="absolute w-[233px] h-12 top-[225px] left-[95px] bg-[#212121] rounded-[5px] overflow-hidden cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            <div className="absolute top-[13px] left-20 font-medium text-white text-sm tracking-[0] leading-[normal]">
              Verify OTP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
