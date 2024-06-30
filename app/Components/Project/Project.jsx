import React from 'react';
import ButtonFull from '../buttons/ButtonFull';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <div className='max-w-[1320px] mx-auto flex items-center flex-col'>
            <p className="text-base text-[#1C1C57] pb-4 text-center font-semibold">Projects</p>
            <h3 className="text-[40px] font-semibold text-[#1C1C57] leading-[120%] text-center">
            Discover Our Success Stories
            </h3>
            <p className="text-base font-medium text-[#1C1C57] text-center mt-6">
              Explore our curated collection of successful projects.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <ProjectCard/>
            </div>
            <ButtonFull text="Check the full Portfolio" link={"#"} />
        </div>
    );
};

export default Project;