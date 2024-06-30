import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="bg-white card_pr_project rounded-[32px] max-w-[632px] w-full overflow-hidden text-[#1C1C57]">
      <Image
        src="/projectcard.png"
        alt="project image"
        width={632}
        height={356}
      />
      <div className="p-6">
        <p className="text-2xl font-bold">AirFlow X - SaaS Website Template</p>
        <p className="text-base text-[#1C1C57] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <p className="text-sm font-semibold bg-[#F4F4F4] px-2 py-1">Saas</p>
          <p className="text-sm font-semibold bg-[#F4F4F4] px-2 py-1">UI</p>
          <p className="text-sm font-semibold bg-[#F4F4F4] px-2 py-1">WebFlow</p>
        </div>
        <button className="flex items-center gap-3 mt-6 hover:text-[#255BF9] transition-all duration-500 ">
          View Project{" "}
          <svg
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.51 3.39014H0.5V5.39014H12.51V8.39014L16.5 4.39014L12.51 0.390137V3.39014Z"
              fill="#255BF9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
