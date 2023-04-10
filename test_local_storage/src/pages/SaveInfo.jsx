import React, { useState, useEffect } from "react";
import "./SaveInfo.scss";

const SaveInfo = () => {
  const [percentList, setPercentList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [textList, setTextList] = useState([]);
  const [keyList, setKeyList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(
      (key) => key.startsWith("bar_") || key.startsWith("about_")
    );
    const percentList = [];
    const titleList = [];
    const textList = [];
    const keyList = [];
    keys.forEach((key) => {
      const data = JSON.parse(localStorage.getItem(key));
      percentList.push(data.percent);
      titleList.push(data.emotion_title);
      textList.push(data.emotion_text || "");
      keyList.push(key);
    });
    setPercentList(percentList);
    setTitleList(titleList);
    setTextList(textList);
    setKeyList(keyList);
  }, []);

  const handleDeleteClick = (key) => {
    localStorage.removeItem(key);
    const idx = keyList.indexOf(key);
    setPercentList((prevPercentList) =>
      prevPercentList.filter((_, i) => i !== idx)
    );
    setTitleList((prevTitleList) => prevTitleList.filter((_, i) => i !== idx));
    setTextList((prevTextList) => prevTextList.filter((_, i) => i !== idx));
    setKeyList((prevKeyList) => prevKeyList.filter((_, i) => i !== idx));
  };

  return (
    <div className="save-info">
      <h2 className="save-info__title">Saved Emotions</h2>
      {keyList.length ? (
        <ul className="save-info__list">
          {keyList.map((key, i) => (
            <li className="save-info__item" key={key}>
              <div className="save-info__header">
                <div className="save-info__percent">
                  {percentList[i] ? `${percentList[i]}%` : ""}
                </div>
                <div className="save-info__title">{titleList[i]}</div>
                <button
                  className="save-info__delete"
                  onClick={() => handleDeleteClick(key)}
                >
                  Delete
                </button>
              </div>
              {textList[i] && (
                <div className="save-info__text">{textList[i]}</div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="save-info__empty">
          You haven't saved any emotions yet!
        </div>
      )}
    </div>
  );
};

export default SaveInfo;
