import { API_KEY } from "./enum";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY.API_KEY_MOVIE}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY.API_KEY_MOVIE}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY.API_KEY_MOVIE}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY.API_KEY_MOVIE}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY.API_KEY_MOVIE}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY.API_KEY_MOVIE}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY.API_KEY_MOVIE}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY.API_KEY_MOVIE}&with_genres=99`,
};

// https://api.themoviedb.org/3/trending/all/day?api_key&language=en-US
export default requests;
