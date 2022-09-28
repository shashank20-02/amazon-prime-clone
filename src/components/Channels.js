import React from "react";
import Carousel from "./Carousel";
import Requests from "./Requests";
import Rows from "./Row";
function Channels() {
  return (
    <div>
      <Carousel folder="posters-channel" />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvTrending}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvDocumentary}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvDrama}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvKids}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvMystery}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvNews}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvReality}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvScifi}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvSoap}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvTalk}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvWar}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchtvWestern}
      />
    </div>
  );
}

export default Channels;
