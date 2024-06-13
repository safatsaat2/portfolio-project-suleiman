import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';


const Testimonial = () => {
  return (
    <>
      <svg
        width="1440"
        height="130"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0.390137V129.664H0L1440 0.390137Z" fill="#255BF9" />
      </svg>
        <div className="bg-[#255BF9] text-white">
        <Swiper
      // install Swiper modules
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        </div>
      <svg
        width="1440"
        height="130"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 129.827V0.552628H1440L0 129.827Z" fill="#255BF9" />
      </svg>
    </>
  );
};

export default Testimonial;
