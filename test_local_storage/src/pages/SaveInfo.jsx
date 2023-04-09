import React, { useState } from "react";

const SaveInfo = () => {
  // 로컬 스토리지에서 저장된 모든 값을 가져와 배열로 저장
  const savedInputs = Object.entries(localStorage)
    .filter(([key, value]) => key.startsWith("saveInput"))
    .map(([key, value]) => value);

  // Base64 문자열을 이미지 파일 URL로 변환하는 함수
  const base64ToImage = (base64String) => {
    const bytes = new Uint8Array(
      atob(base64String)
        .split("")
        .map((char) => char.charCodeAt(0))
    );
    const blob = new Blob([bytes], { type: "image/png" });
    return URL.createObjectURL(blob);
  };

  return (
    <div>
      <h1>저장된 값 목록</h1>
      <ul>
        {/* 로컬 스토리지에서 가져온 값들을 순회하며 리스트 아이템으로 출력 */}
        {savedInputs.map((savedInput, index) => (
          <li key={index}>
            {savedInput.startsWith("data:image") ? (
              <img src={base64ToImage(savedInput)} alt="저장된 이미지" />
            ) : (
              savedInput
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveInfo;
