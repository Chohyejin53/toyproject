import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>감정 저장소</h1>
      <span>
        <Link to="/BarType"> 입장하기</Link>
      </span>
    </div>
  );
};

export default Home;
