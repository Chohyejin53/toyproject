import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BarType.scss";

const BarType = () => {
  const [inputValue, setInputValue] = useState("");
  const [percent, setPercent] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePercentChange = (event) => {
    setPercent(event.target.value);
  };

  const handleNextClick = () => {
    // const data = {
    //   emotion_title: inputValue,
    //   percent: percent,
    // };
    // localStorage.setItem(`bar_${Date.now()}`, JSON.stringify(data));

    const data = {
      text: inputValue,
      percent: percent,
      emotion_text: "감정 설명을 입력해주세요.",
    };
    localStorage.setItem(`bar_${Date.now()}`, JSON.stringify(data));
  };

  return (
    <div>
      <h2>
        <input
          id="emotion_title"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </h2>
      <input
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={handlePercentChange}
      />
      <span id="percent">{percent}%</span>
      <div>
        <Link to="/about" onClick={handleNextClick}>
          다음
        </Link>
      </div>
    </div>
  );
};

export default BarType;
