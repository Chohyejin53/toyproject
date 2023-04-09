import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SaveInfo from "./pages/SaveInfo.jsx";

function App() {
  // 상태 변수로 저장된 값들을 관리
  const [savedInputs, setSavedInputs] = useState(() => {
    // 로컬 스토리지에서 저장된 모든 값을 가져와 배열로 저장
    return Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("saveInput"))
      .map(([key, value]) => value);
  });

  // 저장 버튼 클릭 이벤트 처리 함수
  const handleSave = (inputValue) => {
    localStorage.setItem(`saveInput_${Date.now()}`, inputValue);
    setSavedInputs([...savedInputs, inputValue]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About onSave={handleSave} savedInputs={savedInputs} />}
        />
        <Route
          path="/saveinfo"
          element={<SaveInfo savedInputs={savedInputs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
