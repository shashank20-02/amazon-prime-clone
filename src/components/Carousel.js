import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/carousel.css";
const Carousel_Render = [
  "poster1.webp",
  "poster2.webp",
  "poster3.webp",
  "poster4.webp",
  "poster5.webp",
  "poster6.webp",
  "poster7.webp",
  "poster8.webp",
  "poster9.webp",
  "poster10.webp",
  "poster11.webp",
  "poster12.webp",
];

export default (props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={true}
    >
      {Carousel_Render.map((element, id) => {
        const logo = require(`../assets/${props.folder}/${element}`);
        console.log(element);
        return (
          <SwiperSlide>
            <img src={logo} alt="" width={"100%"} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
