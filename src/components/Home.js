import { React } from "react";
import Carousel from "./Carousel";
import Rows from "./Row";
import Requests from "./Requests";
function Home() {
  return (
    <div>
      <Carousel folder="posters-home" />
      <Rows
        suffix={"RENT"}
        title={"New Releases"}
        fetchUrl={Requests.fetchTrending}
      />
      <Rows
        suffix={"RENT"}
        title={"New Top Rated"}
        fetchUrl={Requests.fetchTopRated}
      />
      <Rows
        suffix={"RENT"}
        title={"New Action"}
        fetchUrl={Requests.fetchActionMovies}
      />
      <Rows
        suffix={"RENT"}
        title={"New Adventures"}
        fetchUrl={Requests.fetchAdventures}
      />
      <Rows
        suffix={"RENT"}
        title={"New Comedy"}
        fetchUrl={Requests.fetchComedyMovies}
      />
      <Rows
        suffix={"RENT"}
        title={"New Horror"}
        fetchUrl={Requests.fetchHorrorMovies}
      />
      <Rows
        suffix={"RENT"}
        title={"New Romance"}
        fetchUrl={Requests.fetchRomanceMovies}
      />
      <Rows
        suffix={"RENT"}
        title={"New Animation"}
        fetchUrl={Requests.fetchAnimation}
      />
      <Rows
        suffix={"RENT"}
        title={"New Documentaries"}
        fetchUrl={Requests.fetchDocumantaries}
      />
    </div>
  );
}

export default Home;
