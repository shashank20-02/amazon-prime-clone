import { Swiper, SwiperSlide } from "swiper/react";
import { React, useState, useEffect } from "react";
import axios from "./Axios";
import RowItem from "./Row_Item";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/row.css";
// import required modules
import { Navigation } from "swiper";

export default function App(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(props.fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchdata();
  });

  return (
    <div className="__row">
      <div className="__heading_row">
        <h3>
          <span style={{ color: "white", fontWeight: "lighter" }}>
            {props.suffix} &nbsp;
          </span>
          {props.title} Movies
        </h3>
      </div>
      <div className="__swiper_row">
        <Swiper
          slidesPerView={5}
          spaceBetween={2}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {movies.map((element, id) => {
            return (
              <SwiperSlide>
                <RowItem
                  pic={
                    element.backdrop_path === null
                      ? element.poster_path
                      : element.backdrop_path
                  }
                  name={element.title ? element.title : element.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
