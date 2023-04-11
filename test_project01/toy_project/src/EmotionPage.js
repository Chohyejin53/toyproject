import React, { useState, useEffect } from "react";
import axios from "axios";

const EmotionForm = ({ addEmotion }) => {
  const [emotion, setEmotion] = useState("");
  const [intensity, setIntensity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/emotions/", {
      emotion,
      intensity,
    });
    addEmotion(response.data);
    setEmotion("");
    setIntensity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Emotion"
        value={emotion}
        onChange={(event) => setEmotion(event.target.value)}
      />
      <input
        type="number"
        placeholder="Intensity"
        value={intensity}
        onChange={(event) => setIntensity(event.target.value)}
      />
      <button type="submit">Add Emotion</button>
    </form>
  );
};

const EmotionList = ({ emotions, deleteEmotion }) => {
  const handleDelete = async (id) => {
    await axios.delete(`/api/emotions/${id}/`);
    deleteEmotion(id);
  };

  return (
    <ul>
      {emotions.map((emotion) => (
        <li key={emotion.id}>
          {emotion.emotion} - {emotion.intensity}
          <button onClick={() => handleDelete(emotion.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const EmotionPage = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const fetchEmotions = async () => {
      const response = await axios.get("/api/emotions/");
      setEmotions(response.data);
    };
    fetchEmotions();
  }, []);

  const addEmotion = (emotion) => {
    setEmotions([...emotions, emotion]);
  };

  const deleteEmotion = (id) => {
    setEmotions(emotions.filter((emotion) => emotion.id !== id));
  };

  return (
    <div>
      <h1>Emotions</h1>
      <EmotionForm addEmotion={addEmotion} />
      <EmotionList emotions={emotions} deleteEmotion={deleteEmotion} />
    </div>
  );
};

export default EmotionPage;
