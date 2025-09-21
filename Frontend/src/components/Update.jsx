 import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateNote = ({ note, notes, setNotes }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [editing, setEditing] = useState(false); // Toggle edit form

  const handleUpdateNote = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    try {
      const res = await axios.put(
        `http://localhost:3000/api/v1/note/update/${note._id}`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update note in state
      const updatedNotes = notes.map(n => n._id === note._id ? res.data.note : n);
      setNotes(updatedNotes);
      setEditing(false); // Close edit form
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleUpdateNote} className="flex flex-col space-y-2 mb-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default UpdateNote;
