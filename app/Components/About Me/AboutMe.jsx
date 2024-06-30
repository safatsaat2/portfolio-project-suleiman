import Image from "next/image";
import React from "react";
import about from "../../../public/aboutme.png";
import ButtonFull from "../buttons/ButtonFull";
import "./aboutme.css"

const AboutMe = () => {
    const srslist=[
        {
            "title":"100%",
            "des": "Project Completed"
        },
        {
            "title":"98%",
            "des": "Client satisfied"
        },
        {
            "title":"80%",
            "des": "Design Project"
        }
    ]
  return (
    <div className="pt-[35px] pb-[27px]">
      <div className="max-w-[1374px] mx-auto flex items-center justify-between flex-col lg:flex-row">
        <div className="max-w-[50%]">
          <Image src={about} alt="suleiman about" />
        </div>
        <div className="max-w-[50%]">
          <p className="text-base text-[#1C1C57] pb-4">About Me</p>
          <h3 className="text-[40px] font-medium text-[#1C1C57] leading-[120%]">
            Who is responsible for all of this impressive effort?
          </h3>
          <p className="text-base text-[#1C1C57] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="mt-8 mb-10 flex flex-col sm:flex-row gap-14 items-stretch justify-start">
            {srslist.map((list)=> <div key={list?.des} className="bg-[#FDFDFF] rounded-lg p-3 srsDropAbout">
                <h2 className="text-[36px] text-[#1C1C57] font-medium">{list?.title}</h2>
                <p className="text-base text-[#1C1C57] mt-2">{list?.des}</p>
            </div>)}
          </div>
          <ButtonFull text={"About Me"} link="#"/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
