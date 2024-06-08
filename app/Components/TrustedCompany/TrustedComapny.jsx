import Image from "next/image";
import React from "react";
import logos from "../../../public/Content.png";

const TrustedComapny = () => {
  return (
    <div className="p-6 lg:py-20 bg-[#3E3E70] ">
      <div className="flex lg:flex-row flex-col  items-center justify-between max-w-[1280px] mx-auto">
        <p className="text-xl text-white font-bold lg:text-left text-center">
          Trusted by top companies <br /> worldwide
        </p>

        <div className="">
            <Image src={logos} alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default TrustedComapny;
