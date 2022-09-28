const API_KEY = "0651dcfad4a2795ef3ef2180592c54c9";

const Requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&include_image_language=en`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_image_language=en`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventures: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchImg: `/images?api_key=${API_KEY}&language=en-US&include_image_language=en`,
  fetchtvTrending: `/trending/tv/week?api_key=${API_KEY}`,
  fetchtvDocumentary: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchtvDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchtvFamily: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  fetchtvComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchtvKids: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchtvMystery: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchtvNews: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  fetchtvReality: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchtvScifi: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchtvSoap: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  fetchtvTalk: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  fetchtvWar: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchtvWestern: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
};

export default Requests;
