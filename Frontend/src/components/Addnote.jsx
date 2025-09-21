//  import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // ← ye import add karo

// const Addnote = ({ setNotes, notes }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleAddNote = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) return navigate("/login");

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/note/create",
//         { title, content },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNotes([res.data.note, ...notes]); // Add new note on top
//       setTitle("");
//       setContent("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="my-6 bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
//       <h2 className="text-xl font-semibold mb-2">Add a Note</h2>
//       <form onSubmit={handleAddNote} className="flex flex-col space-y-3">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
//         >
//           Add Note
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Addnote;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Addnote = ({ setNotes, notes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleAddNote = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/note/create",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotes([res.data.note, ...notes]); // Add new note on top
      setTitle("");
      setContent("");
      setIsExpanded(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/30 shadow-lg shadow-cyan-500/20 max-w-md mx-auto"
    >
      {!isExpanded ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold p-3 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
        >
          + Add New Note
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-100 text-center">Add a Note</h2>
          <form onSubmit={handleAddNote} className="flex flex-col space-y-4">
            <motion.input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-xl bg-white/10 text-white placeholder-cyan-200/60 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300"
              required
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(34, 211, 238, 0.4)" }}
            />
            <motion.textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-3 rounded-xl bg-white/10 text-white placeholder-cyan-200/60 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 min-h-[100px]"
              required
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(34, 211, 238, 0.4)" }}
            ></motion.textarea>
            <div className="flex gap-3">
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05, 
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold p-2 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Add Note
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setIsExpanded(false)}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-red-500/80 text-white font-bold p-2 rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Addnote;