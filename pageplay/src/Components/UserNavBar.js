import React from "react";
import arrowDown7 from "../assets/images/arrow.png";
import book1 from "../assets/images/book.png";
import line3 from "../assets/images/line3.png";
export const UserNav = () => {
  return (
    <div className="relative w-[1418px] h-[117px]">
      <img
        className="absolute w-[76px] h-[90px] top-[9px] left-0 object-cover"
        alt="Book"
        src={book1}
      />
      <div className="absolute w-[131px] top-[41px] left-[76px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#265073] text-[22px] tracking-[0] leading-[normal]">
        PagePlay
      </div>
      <div className="absolute top-[38px] left-[1160px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
        Contact us
      </div>
      <div className="absolute w-[99px] top-[38px] left-[911px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
        My Books
      </div>
      <div className="absolute w-[63px] h-[37px] top-[38px] left-[801px]">
        <div className="absolute w-[62px] top-0 left-px [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#205e93] text-xl tracking-[0] leading-[normal]">
          Home
        </div>
        <img
          className="absolute w-[61px] h-3 top-[25px] left-0"
          alt="Line"
          src={line3}
        />
      </div>
      <div className="absolute top-[38px] left-[1057px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
        Blogs
      </div>
      <div className="absolute w-[62px] h-[62px] top-[23px] left-[1333px] bg-[#58b6d5] rounded-[31px]  bg-cover bg-[50%_50%]" />
      <img
        className="absolute w-3 h-3 top-[49px] left-[1400px] object-cover"
        alt="Arrow down"
        src={arrowDown7}
      />
    </div>
  );
};

export default UserNav;
