import Image from "next/image";
import React from "react";
import experience from "../../../public/my experience.png"
import ExperienceCard from "./ExperienceCard";




const MyExperience = () => {

  const experienceList=[
    {
      company:"Facebook",
      icon:"/facebook.svg",
      title:"Webflow developments",
      year:"May 12 2023 Present",
      description:"All data is encrypted to ensure the confidentiality and integrity of your portfolio.",
    },
    {
      company:"Twitter",
      icon:"/facebook.svg",
      title:"UI/UX Designer",
      year:"June 18 2022 -Dec 2023",
      description:"All data is encrypted to ensure the confidentiality and integrity of your portfolio.",
    },
    {
      company:"Slack",
      icon:"/facebook.svg",
      title:"Head of Product Design",
      year:"June 18 2021 -August 2023",
      description:"All data is encrypted to ensure the confidentiality and integrity of your portfolio.",
    },
    {
      company:"Figma",
      icon:"/facebook.svg",
      title:"Product Designer",
      year:"June 18 2020 -Dec 2022",
      description:"All data is encrypted to ensure the confidentiality and integrity of your portfolio.",
    },

  ]


  return (
    <div className='pt-[35px] pb-[27px] bg-[#F6F8FF]'>
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
          <div className="mt-8 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch justify-start">
            {experienceList.map((item=>(
              <ExperienceCard key={item?.company} icon={item?.icon} companyName={item?.company} title={item?.title} year={item?.year} description={item?.description} />
            )))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
