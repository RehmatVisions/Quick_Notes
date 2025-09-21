import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteNote = ({note, notes, setNotes, }) => {
    const navigate = useNavigate();
    const handleDeleteNote = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) return navigate("/login");

  try {
    await axios.delete(`http://localhost:3000/api/v1/note/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Remove note from state
    setNotes(notes.filter((note) => note._id !== id));
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
       <button
    onClick={() => handleDeleteNote(note._id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
    </div>
  )
}

export default DeleteNote
