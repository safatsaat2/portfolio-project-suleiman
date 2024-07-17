"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css"
import ReactPlayer from "react-player";
const Testimonial = () => {


    const reviewsList =[
        {
            name: "Gabriela Balazs",
            country: "Romania",
            url:"/Gabriela Balazs.mp4"
        },
        {
            name: "Tony Zamberlin",
            country: "USA",
            url:"/Tony Zamberlin.mp4"
        },
        {
            name: "Daniyel Love",
            country: "USA",
            url:"/Daniyel Love.mp4"
        },
        {
            name: "Nolan Granberg",
            country: "USA",
            url:"/Nolan Granberg.mp4"
        },
        {
            name: "Alec Martin",
            country: "USA",
            url:"/Alec Martin.mp4"
        }
        
    ]


  return (
    <div className="bg-[#255BF9] px-[64px] py-[112px] testimonial_sec">
        <h2 className="text-center text-white text-4xl">
            Testimonials
        </h2>
      <div className="max-w-[1280px] mx-auto">
        <Swiper navigation={true} modules={[Navigation]} breakpoints={{
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }} className="mySwiper">
          
          {reviewsList.map((review)=><SwiperSlide key={review?.url}>
            <div className="srs_video_wrapper flex flex-col justify-center items-center">
              <ReactPlayer
                width="500px"
                height="400px"
                url={review?.url}
                controls={true}
                light={false}
                pip={true}
              />
              <source src={review?.url} type="video/mp4" />
                <p className="text-center text-xl text-white mt-4">{review?.name}</p>
                <p className="text-center text-sm text-white">{review?.country}</p>
            </div>
          </SwiperSlide>)}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
