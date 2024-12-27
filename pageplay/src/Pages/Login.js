import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import x100289701 from "../assets/images/ai-image.svg";
import x2412205069043541 from "../assets/images/24122050-6904354-1.png";
import x2412205167789441 from "../assets/images/24122051-6778944-1.png";
import email1 from "../assets/images/email.png";
import group15 from "../assets/images/group-15.png";
import hide1 from "../assets/images/hide-1.png";
import lock1 from "../assets/images/lock-1.png";
import logo from "../assets/images/book.png";
import hide2 from "../assets/images/hide-2.png";
import userSignin1 from "../assets/images/user-signin-1.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-[#d4e0b4] flex flex-row justify-center w-full">
      <div className="bg-[#d4e0b4] w-[1535px] h-[768px]">
        <div className="relative w-[1532px] h-28 top-[11px]">
          <img
            className="absolute w-[76px] h-[90px] top-2.5 left-4 object-cover"
            alt="Book"
            src={logo}
          />

          <div className="absolute w-[131px] top-[35px] left-[92px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#265073] text-2xl tracking-[0] leading-[normal]">
            PagePlay
          </div>

          <img
            className="absolute w-[54px] h-[53px] top-[29px] left-[1438px] object-cover cursor-pointer"
            alt="User signin"
            src={userSignin1}
            onClick={() => {
              navigate("/signup");
            }}
          />
          <div
            className="absolute top-[38px] left-[1319px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal] cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </div>

          <div className="absolute w-[1532px] h-[750px] top-[7px] left-0">
            <div className="absolute w-[912px] h-[516px] top-[108px] left-[312px] bg-[#a4c0ed] rounded-[13px] overflow-hidden">
              <div className="absolute w-full text-center top-[65px] font-bold text-black text-4xl">
                Welcome Back
              </div>

              <div className="absolute w-full text-center top-[100px] font-semibold text-black text-2xl">
                Login to continue
              </div>

              <img
                className="absolute w-[210px] h-[230px] top-[286px] left-0 object-cover"
                alt="Element"
                src={x2412205167789441}
              />

              {/* Password Field */}
              <div className="top-[275px] relative w-[542px] h-[67px] left-[212px] bg-white rounded-[40px] overflow-hidden">
                <img
                  className="absolute w-[23px] h-7 top-[19px] left-[26px] object-cover"
                  alt="Lock"
                  src={lock1}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="absolute top-[19px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                />
                <img
                  className="absolute w-7 h-[19px] top-[26px] right-[26px] cursor-pointer object-cover"
                  alt="Hide"
                  src={showPassword ? hide2 : hide1}
                  onClick={togglePasswordVisibility}
                />
              </div>

              {/* Login Button */}
              <div className="absolute w-[174px] h-[49px] top-[365px] left-[396px] bg-[#f5ffde] rounded-[46px] flex items-center justify-center cursor-pointer">
                <div className="font-medium text-black text-xl">Login</div>
              </div>

              {/* Forgot Password */}
              <div
                className="absolute top-[425px] left-[419px] font-medium text-secondary text-[15px] cursor-pointer"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot password
              </div>

              {/* Email Field */}
              <div className="top-[174px] absolute w-[542px] h-[67px] left-[212px] bg-white rounded-[40px] overflow-hidden">
                <img
                  className="absolute w-[25px] h-[25px] top-[21px] left-7 object-cover"
                  alt="Email"
                  src={email1}
                />
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="absolute top-[19px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg"
                />
              </div>

              {/* Sign Up Link */}
              <p className="absolute top-[455px] left-[403px] font-medium text-lg">
                <span className="text-black">New User? </span>
                <span
                  className="text-[#265073] cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </span>
              </p>
            </div>

            {/* Decorative Images */}
            <img
              className="absolute w-[412px] h-[356px] top-[394px] left-[1120px]"
              alt="Group"
              src={group15}
            />
            <img
              className="absolute w-[245px] h-[346px] top-0 left-[1036px] object-cover"
              alt="Element"
              src={x2412205069043541}
            />
            <img
              style={{ left: "-50px" }}
              className="absolute w-[373px] h-[265px] top-[485px] left-0"
              alt="Element"
              src={x100289701}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
