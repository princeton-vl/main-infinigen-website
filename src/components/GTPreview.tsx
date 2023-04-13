import clsx from "clsx";

import React, { useRef, useState, Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation } from "swiper";

const GTTile = () => {
  return (
    <div class="card-demo">
      <div class="card">
        <div class="card__image">
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div class="card__body">
          <h4>
            <center>Occlusion Boundaries</center>
          </h4>
        </div>
      </div>
    </div>
  );
};

const GTPreview = () => {
  return (
    <>
      <Swiper
        slidesPerView={3.3}
        grid={{
          rows: 2,
          fill: "row",
        }}
        style={{ "--swiper-navigation-color": "#888888" }}
        spaceBetween={32}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
        <SwiperSlide>
          <GTTile />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GTPreview;
