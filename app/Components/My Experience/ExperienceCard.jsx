import Image from "next/image";
import React from "react";

const ExperienceCard = ({icon, companyName, title, year, description}) => {
  return (
    <div className="bg-white rounded-2xl text-[#1C1C57] shadow-sm p-4">
      <div className="flex items-center gap-4">
        <Image src={`${icon}`} alt="facebook" width={48} height={48}/>

        <p className="font-bold text-lg">
            {companyName}
        </p>
      </div>
      <p className="text-xl font-medium mt-4 mb-2">{title}</p>
      <p className="mb-4">{year}</p>
      <p className="text-[#3E3E70]">{description}</p>
    </div>
  );
};

export default ExperienceCard;
