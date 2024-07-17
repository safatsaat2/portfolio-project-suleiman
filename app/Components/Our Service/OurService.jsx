import React from "react";
import TitleSecServices from "./TitleSecServices";
import CatSecServices from "./CatSecServices";
import ButtonFull from "../buttons/ButtonFull";
import ButtonHalf from "../buttons/ButtonHalf";

const OurService = () => {
  return (
    <div className="bg-[#F6F8FF] py-28 px-5">
      <div className="max-w-[1280px] mx-auto">
        <TitleSecServices />
        <CatSecServices />
        <div className="flex items-center justify-center gap-4 pt-12">
          <ButtonFull text={"Hire Me"} link={"#"} />
          <ButtonHalf text={"Portfolio"} link={"#"} />
        </div>
      </div>
    </div>
  );
};

export default OurService;
