// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';

 
// import { useNavigate } from "react-router-dom";
// import Logout from '../pages/Logout';
// import Addnote from './Addnote';
// import DeleteNote from './DeleteNote';
// import UpdateNote from './Update';
// const Notes = () => {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//   const navigate=useNavigate();

//   useEffect(() => {
//     const fetchNotes=async()=>{
//     const token=localStorage.getItem("token");
//    if(!token){
//     navigate("/login")
//     return
//    }
//    try {
//     const res =await axios.get("http://localhost:3000/api/v1/note/getall",{
//       headers:{
//         Authorization:`Bearer ${token}`,
//       },
   
//     })
//        setNotes(res.data.notes);
//        setLoading(false);
//    } catch (error) {
//     console.log(error);
//     setLoading(false);
//     if(error.response.status===401){
//       navigate("/login");
//     }
//    }
//     }
//     fetchNotes();
//   }, [navigate])

//   if(loading) return <h1>Loading Notes...</h1>









  
//   return (
     
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-100 p-6"
//     >
//       <motion.h1
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-bold text-gray-800 text-center mb-6"
//       >
//         Your Notes
//       </motion.h1>
//      <div className='flex items-end justify-center'>
//        <Logout/>
//        {/* add */}
//    <Addnote setNotes={setNotes} notes={notes} />

//        {/*  */}
//      </div>
//       <AnimatePresence>
//         {notes.length === 0 ? (
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-xl text-gray-500 text-center mt-8"
//           >
//             No Notes Found
//           </motion.h1>
//         ) : (
//           notes.map((note) => (
//             <motion.ul
//               key={note._id}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="mb-4"
//             >
//               <motion.li
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white p-4 rounded-lg shadow-md"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
//                 <p className="text-gray-600">{note.content}</p>
//                  <DeleteNote note={note} notes={notes} setNotes={setNotes} />
//                    <UpdateNote note={note} notes={notes} setNotes={setNotes} />
//               </motion.li>
//             </motion.ul>
//           ))
//         )}
//       </AnimatePresence>
//     </motion.div>


// // {update}
//   )
// }

// export default Notes

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Logout from '../pages/Logout';
import Addnote from './Addnote';
import DeleteNote from './DeleteNote';
import UpdateNote from './Update';
import Navbar from './Navbar';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login")
        return
      }
      try {
        const res = await axios.get("http://localhost:3000/api/v1/note/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setNotes(res.data.notes);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        if (error.response.status === 401) {
          navigate("/login");
        }
      }
    }
    fetchNotes();
  }, [navigate])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
      >
        Loading Notes...
      </motion.div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <Navbar/>

      <div className="relative z-10">
       
    
        <div className='flex flex-wrap items-center justify-center gap-4 mb-8'>
         
          <Addnote setNotes={setNotes} notes={notes} />
        </div>
   <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        >
          Your Notes 

          
        </motion.h1>
        <AnimatePresence mode="wait">
          {notes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl text-cyan-200 text-center mt-16 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-400/30"
            >
              No Notes Found
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              
              <AnimatePresence>
                {notes.map((note) => (
                  <motion.div
                    key={note._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      y: -5, 
                      transition: { duration: 0.2 } 
                    }}
                    className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-cyan-400/30 shadow-lg shadow-cyan-500/10"
                  >
                    <h3 className="text-lg font-semibold text-cyan-100 mb-2 truncate">{note.title}</h3>
                    <p className="text-cyan-200/80 mb-4 whitespace-pre-wrap break-words">{note.content}</p>
                    <div className="flex justify-end gap-2">
                      <DeleteNote note={note} notes={notes} setNotes={setNotes} />
                      <UpdateNote note={note} notes={notes} setNotes={setNotes} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Notes
