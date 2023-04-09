import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  // 상태 변수로 input 값을 관리
  const [inputValue, setInputValue] = useState("");

  // 저장 버튼 클릭 이벤트 처리 함수
  const handleClick = () => {
    localStorage.setItem(
      `saveInput_${Date.now()}`,
      JSON.stringify({ text: inputValue })
    );
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button id="saveButton" onClick={handleClick}>
        저장하기
      </button>
      <Link to="/saveinfo">저장된 값 보기</Link>
    </div>
  );
};

export default About;
