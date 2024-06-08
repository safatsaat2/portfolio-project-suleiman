import React from 'react';

const TitleSecServices = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="max-w-[600px]">
            <p className="text-base text-[#1C1C57] pb-4">Our Services</p>
            <h3 className="text-[40px] font-medium text-[#1C1C57] leading-[120%]">
              Take a look at the variety of services I offer.
            </h3>
          </div>
          <div className="max-w-[600px]">
            <p className="text-base text-[#1C1C57]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero{" "}
            </p>
          </div>
        </div>
    );
};

export default TitleSecServices;