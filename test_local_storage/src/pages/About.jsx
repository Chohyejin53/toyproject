import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    const data = {
      emotion_text: inputValue,
    };
    localStorage.setItem(`about_${Date.now()}`, JSON.stringify(data));
    setInputValue("");
  };

  return (
    <div>
      <h2>감정 쓰기</h2>
      <div>
        <input
          id="emotion_text"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSaveClick}>저장하기</button>
      <div>
        <Link to="/saveinfo">저장된 값 보기</Link>
      </div>
    </div>
  );
};

export default About;
