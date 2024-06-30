import Image from "next/image";
import React from "react";

const ExperienceCard = () => {
  return (
    <div className="bg-white rounded-2xl text-[#1C1C57] shadow-sm p-4">
      <div className="flex items-center gap-4">
        <Image src="/facebook.svg" alt="facebook" width={48} height={48}/>

        <p className="font-bold text-lg">
            Facebook
        </p>
      </div>
      <p className="text-xl font-medium mt-4 mb-2">Webflow developments</p>
      <p className="mb-4">May 12 2023 Present</p>
      <p className="text-[#3E3E70]">All data is encrypted to ensure the confidentiality and integrity of your portfolio.</p>
    </div>
  );
};

export default ExperienceCard;
