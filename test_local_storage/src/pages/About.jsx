import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  // 상태 변수로 input 값을 관리
  const [inputValue, setInputValue] = useState("");
  const [fileValue, setFileValue] = useState("");

  // 저장 버튼 클릭 이벤트 처리 함수
  const handleClick = () => {
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64File = reader.result;

      localStorage.setItem(
        `saveInput_${Date.now()}`,
        JSON.stringify({ text: inputValue, file: base64File })
      );
      setInputValue("");
      setFileValue("");
    };
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => setFileValue(event.target.value)}
      />
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
