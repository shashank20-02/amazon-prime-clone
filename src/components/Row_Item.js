import { React, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../styles/row_item.css";
import { Link } from "react-router-dom";
function Row_Item(props) {
  const [count, setcount] = useState(false);

  const handleover = () => {
    setcount(true);
  };
  const handleon = () => {
    setcount(false);
  };

  return (
    <div
      className="__main_row"
      onMouseOver={handleover}
      onMouseLeave={handleon}
    >
      <div className="__row__item">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.pic}`}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      {count && (
        <div className="row__item_2">
          <div className="row__item_2_1">
            <p>{props.name}</p>
          </div>
          <div className="row__item_2_2">
            <div className="row__item_2_2_1">
              <Link to="/">
                <PlayArrowIcon fontsize="large" />
              </Link>
            </div>
            <div className="row__item_2_2_2">
              <Link to="/rowComponent" state={{ img: props.pic }}>
                <MoreVertIcon fontsize="large" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row_Item;
