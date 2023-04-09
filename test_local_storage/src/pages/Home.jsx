import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>마음 풍등</h1>
      <span>
        <Link to="/About"> 입장하기</Link>
      </span>
    </div>
  );
};

export default Home;
