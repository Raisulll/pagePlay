import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import x2412205069043541 from "../assets/images/24122050-6904354-1.png";
import x2412205167789441 from "../assets/images/24122051-6778944-1.png";
import x100289701 from "../assets/images/ai-image.svg";
import logo from "../assets/images/book.png";
import email2 from "../assets/images/email.png";
import group15 from "../assets/images/group-15.png";
import { default as hide1 } from "../assets/images/hide-1.png";
import hide2 from "../assets/images/hide-2.png";
import lock1 from "../assets/images/lock-1.png";
import telephone1 from "../assets/images/telephone.png";
import { default as user1, default as user2 } from "../assets/images/user.png";

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    navigate("/login");
  }

  const handleSignIn = () => {
    navigate("/login");
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="bg-[#d4e0b4] flex flex-row justify-center w-full">
      <div className="bg-[#d4e0b4] w-[1535px] h-[768px]">
        <div className="relative w-[1532px] h-[757px] top-[11px]">
          <img
            className="absolute w-[76px] h-[90px] top-0 left-[13px] object-cover"
            alt="Logo"
            src={logo}
          />

          <div className="absolute w-[131px] top-[30px] left-[89px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#265073] text-2xl tracking-[0] leading-[normal]">
            PagePlay
          </div>

          <div className="absolute w-[1532px] h-[750px] top-[7px] left-0">
            <div className="absolute w-[912px] h-[516px] top-[108px] left-[312px] bg-[#a4c0ed] rounded-[13px] overflow-hidden">
              <div className="absolute w-[345px] top-[22px] left-[310px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                Welcome to PagePlay
              </div>

              <div className="absolute w-60 top-16 left-[364px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal]">
                Sign up to continue
              </div>

              <div className="absolute w-[827px] h-[230px] top-[286px] left-0">
                <div className="absolute w-[624px] h-[230px] top-0 left-0">
                  <div className="absolute w-[120px] h-11 top-[115px] left-[423px] bg-[#294180] rounded-[46px]">
                    <div
                      className="absolute w-[72px] top-[12px] left-[30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] cursor-pointer"
                      onClick={handleSubmit}
                    >
                      Submit
                    </div>
                  </div>

                  <p className="absolute w-[279px] top-[178px] left-[345px] [font-family:'Poppins-Medium',Helvetica] font-medium text-transparent text-base tracking-[0] leading-[normal]">
                    <span className="text-black">
                      Already have an account?{" "}
                    </span>

                    <span
                      className="text-[#265073] cursor-pointer"
                      onClick={handleSignIn}
                    >
                      Sign in
                    </span>
                  </p>
                  {/* password */}
                  <div className="absolute w-[458px] h-[230px] top-0 left-0">
                    <div className="absolute w-[318px] h-[54px] top-[37px] left-[140px] bg-white rounded-[40px] overflow-hidden">
                      <div className="absolute top-3 left-[70px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"></div>

                      <img
                        className="absolute w-[17px] h-[21px] top-[13px] left-6 object-cover"
                        alt="Lock"
                        src={lock1}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                      />
                      <img
                        className="absolute w-7 h-[19px] top-[15px] right-[26px] cursor-pointer object-cover"
                        alt="Hide"
                        src={showPassword ? hide2 : hide1}
                        onClick={togglePasswordVisibility}
                      />
                    </div>

                    <img
                      className="absolute w-[210px] h-[230px] top-0 left-0 object-cover"
                      alt="Element"
                      src={x2412205167789441}
                    />
                  </div>
                </div>
                {/* confirm password */}
                <div className="absolute w-[318px] h-[54px] top-[37px] left-[509px] bg-white rounded-[40px] overflow-hidden">
                  <div className="absolute top-3.5 left-[67px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"></div>

                  <img
                    className="absolute w-[17px] h-[21px] top-[13px] left-6 object-cover"
                    alt="Lock"
                    src={lock1}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "Password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                  />
                  <img
                    className="absolute w-7 h-[19px] top-[15px] right-[26px] cursor-pointer object-cover"
                    alt="Hide"
                    src={showConfirmPassword ? hide2 : hide1}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </div>
              {/* Phone Number filed */}
              <div className="absolute w-[318px] h-[55px] top-[231px] left-[509px] bg-white rounded-[40px] overflow-hidden">
                <div className="absolute top-[13px] left-[68px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"></div>
                <img
                  className="absolute w-[22px] h-[22px] top-4 left-[19px] object-cover"
                  alt="Telephone"
                  src={telephone1}
                />
                <input
                  type={phoneNumber ? "text" : "Phone Number"}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                />
              </div>
              {/* Email */}
              <div className="absolute w-[318px] h-[55px] top-[231px] left-[140px] bg-white rounded-[40px] overflow-hidden">
                <div className="absolute top-[13px] left-[71px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"></div>
                <img
                  className="absolute w-[22px] h-[22px] top-4 left-[18px] object-cover"
                  alt="Email"
                  src={email2}
                />
                <input
                  type={email ? "text" : "Email"}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                />
              </div>
              {/* Last Name */}
              <div className="absolute w-[318px] h-[54px] top-[140px] left-[509px] bg-white rounded-[40px] overflow-hidden">
                <img
                  className="left-4 absolute w-[22px] h-[22px] top-[15px] object-cover"
                  alt="User"
                  src={user2}
                />
                <input
                  type={lastName ? "text" : "Last Name"}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                />
              </div>
              {/* First Name */}
              <div className="absolute w-[318px] h-[54px] top-[140px] left-[140px] bg-white rounded-[40px] overflow-hidden">
                <img
                  className="left-[18px] absolute w-[22px] h-[22px] top-[15px] object-cover"
                  alt="User"
                  src={user1}
                />
                <input
                  type={firstName ? "text" : "First Name"}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="absolute top-[10px] left-[81px] w-[400px] border-none outline-none font-medium text-black text-lg pr-10"
                />
              </div>
            </div>

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

export default SignUp;
