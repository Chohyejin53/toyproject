// import React, { useState, useEffect } from "react";
// import "./SaveInfo.scss";

// const SaveInfo = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const keys = Object.keys(localStorage).filter(
//       (key) => key.startsWith("bar_") || key.startsWith("about_")
//     );
//     const dataList = keys.map((key) => {
//       const data = JSON.parse(localStorage.getItem(key));
//       return { ...data, key };
//     });
//     setDataList(dataList);
//   }, []);

//   const handleDeleteClick = (key) => {
//     localStorage.removeItem(key);
//     setDataList((prevDataList) =>
//       prevDataList.filter((data) => data.key !== key)
//     );
//   };

//   const handleAllDeleteClick = () => {
//     localStorage.clear();
//     setDataList([]);
//   };

//   return (
//     <div>
//       <h1>저장된 값 목록</h1>
//       <button onClick={handleAllDeleteClick}>전체 삭제</button>
//       <div>
//         {dataList.map((data) => (
//           <div key={data.key}>
//             <div>
//               {[data.percent, data.emotion_title].map((item, index) => (
//                 <span key={index}>{item} </span>
//               ))}
//             </div>
//             {data.emotion_text && <div>{data.emotion_text}</div>}
//             <button onClick={() => handleDeleteClick(data.key)}>삭제</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default SaveInfo;

// import React, { useState, useEffect } from "react";
// import "./SaveInfo.scss";

// const SaveInfo = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const keys = Object.keys(localStorage).filter(
//       (key) => key.startsWith("bar_") || key.startsWith("about_")
//     );
//     const dataList = keys.map((key) => {
//       const data = JSON.parse(localStorage.getItem(key));
//       return { ...data, key };
//     });
//     setDataList(dataList);
//   }, []);

//   const handleDeleteClick = (key) => {
//     localStorage.removeItem(key);
//     setDataList((prevDataList) =>
//       prevDataList.filter((data) => data.key !== key)
//     );
//   };

//   const handleAllDeleteClick = () => {
//     localStorage.clear();
//     setDataList([]);
//   };

//   return (
//     <div>
//       <h1>저장된 값 목록</h1>
//       <button onClick={handleAllDeleteClick}>전체 삭제</button>
//       {dataList.map((data, index) => (
//         <div key={data.key}>
//           <div>
//             {[`${data.percent}%`, data.emotion_title].map((item, index) => (
//               <span key={index}>{item} </span>
//             ))}
//           </div>
//           {data.emotion_text && <div>{data.emotion_text}</div>}
//           {index === dataList.length - 1 && (
//             <button onClick={() => handleDeleteClick(data.key)}>삭제</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SaveInfo;

// import React, { useState, useEffect } from "react";
// import "./SaveInfo.scss";

// const SaveInfo = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const keys = Object.keys(localStorage).filter(
//       (key) => key.startsWith("bar_") || key.startsWith("about_")
//     );
//     const dataList = keys.map((key) => {
//       const data = JSON.parse(localStorage.getItem(key));
//       return { ...data, key };
//     });
//     setDataList(dataList);
//   }, []);

//   const handleDeleteClick = (key) => {
//     localStorage.removeItem(key);
//     setDataList((prevDataList) =>
//       prevDataList.filter((data) => data.key !== key)
//     );
//   };

//   const handleAllDeleteClick = () => {
//     localStorage.clear();
//     setDataList([]);
//   };

//   return (
//     <div>
//       <h1>저장된 값 목록</h1>
//       <button onClick={handleAllDeleteClick}>전체 삭제</button>
//       {dataList.map((data, index) => (
//         <div key={data.key}>
//           <div>
//             <span>{`${data.percent}% `}</span>
//             <span>{data.emotion_title}</span>
//           </div>
//           {data.emotion_text && <div>{data.emotion_text}</div>}
//           {index === dataList.length - 1 && (
//             <button onClick={() => handleDeleteClick(data.key)}>삭제</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SaveInfo;

import React, { useState, useEffect } from "react";
import "./SaveInfo.scss";

const SaveInfo = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(
      (key) => key.startsWith("bar_") || key.startsWith("about_")
    );
    const dataList = keys.map((key) => {
      const data = JSON.parse(localStorage.getItem(key));
      return { ...data, key };
    });
    setDataList(dataList);
  }, []);

  const handleDeleteClick = (key) => {
    localStorage.removeItem(key);
    setDataList((prevDataList) =>
      prevDataList.filter((data) => data.key !== key)
    );
  };

  const handleAllDeleteClick = () => {
    localStorage.clear();
    setDataList([]);
  };

  return (
    <div>
      <h1>저장된 값 목록</h1>
      <button onClick={handleAllDeleteClick}>전체 삭제</button>
      {/* {dataList.map((data, index) => (
        <div key={data.key}>
          <div>
            <span id="test"></span>
            {data.emotion_text && <div>{data.emotion_text}</div>}
          </div>
          {index === dataList.length - 1 && (
            <button onClick={() => handleDeleteClick(data.key)}>삭제</button>
          )}
        </div>
      ))} */}
      {dataList.map((data, index) => (
        <div key={data.key}>
          <div>
            <span>{data.percent}%</span>
            <span>{data.text}</span>
          </div>
          {data.emotion_text && <div>{data.emotion_text}</div>}
          {index === dataList.length - 1 && (
            <button onClick={() => handleDeleteClick(data.key)}>삭제</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SaveInfo;
