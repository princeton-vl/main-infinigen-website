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
    <div className="container">
      <div className="row">
        <div className={clsx("col")} style={{ textAlign: "center" }}>
          Surface Normals
        </div>
      </div>
      <div className="row">
        <div className={clsx("col")}>
          <img src={"https://swiperjs.com/demos/images/nature-1.jpg"}></img>
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
