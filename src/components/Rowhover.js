import React from "react";
import "../styles/rowhover.css";
import { useLocation } from "react-router-dom";
function Rowhover() {
  const location = useLocation();
  const { img } = location.state;

  return (
    <div className="__main__row">
      <div className="__detail__section">
        <h1>this is detail section</h1>
      </div>
      <div className="__img__section">
        <img
          src={`https://image.tmdb.org/t/p/original/${img}`}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default Rowhover;
