import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import "./Row.css";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(fetchURL);
      const data = request.data.results;

      setMovies(data);

      return request;
    }
    fetchMovie();
  }, [fetchURL]);

  return (
    <div className="row">
      <div>{title}</div>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
