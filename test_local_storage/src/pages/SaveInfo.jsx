import React, { useState } from "react";
import "./SaveInfo.scss";

const SaveInfo = () => {
  // 로컬 스토리지에서 저장된 모든 값을 가져와 배열로 저장
  const [savedInputs, setSavedInputs] = useState(
    Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("saveInput"))
      .map(([key, value]) => ({ key, value }))
  );

  // 삭제 버튼 클릭 이벤트 핸들러
  const handleRemove = (key) => {
    localStorage.removeItem(key);
    setSavedInputs((prevState) =>
      prevState.filter((savedInput) => savedInput.key !== key)
    );
  };

  // 전체 삭제 버튼 클릭 이벤트 핸들러
  const handleAllRemove = () => {
    localStorage.clear();
    setSavedInputs([]);
  };

  return (
    <div>
      <h1>저장된 값 목록</h1>
      <button onClick={handleAllRemove}>전체 삭제</button>
      <ul>
        {/* 로컬 스토리지에서 가져온 값들을 순회하며 리스트 아이템으로 출력 */}
        {savedInputs.map(({ key, value }, index) => {
          const parsedValue = JSON.parse(value);
          const text = parsedValue.text;
          return (
            <li key={index}>
              {text}
              <button onClick={() => handleRemove(key)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SaveInfo;
