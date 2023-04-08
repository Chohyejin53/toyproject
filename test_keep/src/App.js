import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDA1epra2WCM_JF0FC_L10VNtKU0ZH5Xy4';
const API_HEADERS = { 'Authorization': `Bearer ${API_KEY}` };

const KeepNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Fetch notes from API on component mount
  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get('https://www.googleapis.com/keep/v1/notes', { headers: API_HEADERS });
        setNotes(response.data.notes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotes();
  }, []);

  // Handle input changes for new note
  const handleNewNoteTitleChange = (event) => {
    setNewNoteTitle(event.target.value);
  };

  const handleNewNoteContentChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  // Create new note on button click
  const handleCreateNote = async () => {
    const data = {
      title: newNoteTitle,
      text: newNoteContent,
      type: 'NOTE',
    };

    try {
      const response = await axios.post('https://www.googleapis.com/keep/v1/notes', data, { headers: API_HEADERS });
      setNotes([...notes, response.data]);
      setNewNoteTitle('');
      setNewNoteContent('');
    } catch (error) {
      console.error(error);
    }
  };

  // Delete note on button click
  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`https://www.googleapis.com/keep/v1/notes/${noteId}`, { headers: API_HEADERS });
      const updatedNotes = notes.filter((note) => note.name !== noteId);
      setNotes(updatedNotes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Google Keep Notes</h1>

      {/* Create new note form */}
      <h2>Create a new note</h2>
      <div>
        <label htmlFor="new-note-title">Title:</label>
        <input type="text" id="new-note-title" value={newNoteTitle} onChange={handleNewNoteTitleChange} />
      </div>
      <div>
        <label htmlFor="new-note-content">Content:</label>
        <textarea id="new-note-content" value={newNoteContent} onChange={handleNewNoteContentChange} />
      </div>
      <button onClick={handleCreateNote}>Create Note</button>

      {/* List of notes */}
      <h2>List of notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.name}>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <button onClick={() => handleDeleteNote(note.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeepNotes;
