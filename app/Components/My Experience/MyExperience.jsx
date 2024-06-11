import Image from "next/image";
import React from "react";
import experience from "../../../public/my experience.png"
import ButtonFull from "../buttons/ButtonFull";

const MyExperience = () => {
  return (
    <div className='pt-[35px] pb-[27px]"'>
      <div className="max-w-[1374px] mx-auto flex items-center justify-between flex-col lg:flex-row-reverse">
        <div className="max-w-[50%]">
          <Image src={experience} alt="suleiman experinece" />
        </div>
        <div className="max-w-[50%]">
          <p className="text-base text-[#1C1C57] pb-4">My Experience</p>
          <h3 className="text-[40px] font-medium text-[#1C1C57] leading-[120%]">
          Protect Your Portfolio with Airfolio's Security Features
          </h3>
          <p className="text-base text-[#1C1C57] mt-6">
          At Airfolio, we prioritize the security of your portfolio. With advanced encryption and secure servers, you can trust that your work is safe with us.
          </p>
          <div className="mt-8 mb-10 flex flex-col sm:flex-row gap-14 items-stretch justify-start">
            {/* {srslist.map((list) => (
              <div
                key={list?.des}
                className="bg-[#FDFDFF] rounded-lg p-3 srsDropAbout"
              >
                <h2 className="text-[36px] text-[#1C1C57] font-medium">
                  {list?.title}
                </h2>
                <p className="text-base text-[#1C1C57] mt-2">{list?.des}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
