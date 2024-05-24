import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

function Home() {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowID="2" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
}

export default Home;
