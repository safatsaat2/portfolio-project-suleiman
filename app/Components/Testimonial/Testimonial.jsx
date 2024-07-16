"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ReactPlayer from "react-player";
const Testimonial = () => {
  let videosrc = "/Tony Zamberlin.mp4";
  return (
    <div className="bg-[#255BF9] px-[64px] py-[112px]">
      <div className="max-w-[1280px] mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="srs_video_wrapper flex justify-center items-center">
              <ReactPlayer
                width="500px"
                height="400px"
                url={videosrc}
                controls={true}
                light={false}
                pip={true}
              />
              <source src={videosrc} type="video/mp4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
