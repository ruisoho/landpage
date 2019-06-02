import React from "react";
import "../misc/App.css";
const Home = () => {
  // Home/index route

  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="spacing">
          <h1 id="hero__heading">
            We strive to make you <br />a better{" "}
            <span id="highlight">developer</span> <br />
            or <span id="highlight">designer</span>
          </h1>
        </div>
      </div>
  );
};

export default Home;
