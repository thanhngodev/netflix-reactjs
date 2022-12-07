import React from "react";
import requests from "../../services/requests";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Row/Row";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Navbar />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} />

      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />

      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
