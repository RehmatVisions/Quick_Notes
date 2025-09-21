// import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react'
// import {motion} from 'framer-motion'
// import axios from 'axios'
// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate=useNavigate()
//       const [message, setMessage] = useState('');   
//       const handleLogin=async(e)=>{
//        e.preventDefault();
//        try {
//         const res=await axios.post("http://localhost:3000/api/auth/login",{
//           email,password
//         },  { withCredentials: true } )

//         localStorage.setItem("token",res.data.token)
//         // console.log("Saved token:", localStorage.getItem("token"));
//         // console.log("Response from backend:", res.data);

//         setMessage(res.data.message || "Logged in successfully");
//        setTimeout(() => {
//         navigate("/notes")
//        }, 1500);
//        } catch (error) {
//         console.log(error)
//         setMessage(error?.response?.data?.message || "Something went wrong");
//        }
//       }
//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, ease: 'easeOut' }}
//     className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
//   >
//     <motion.h1
//       initial={{ scale: 0.8 }}
//       animate={{ scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.2 }}
//       className="text-3xl font-bold text-center text-gray-800 mb-6"
//     >
//       Login
//     </motion.h1>
//     <form  onSubmit={handleLogin} className="space-y-4">
//       <motion.div
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       ></motion.div>
//       <motion.div
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <label className="block text-sm font-medium text-gray-700">Enter Your Email</label>
//         <motion.input
//           type="email"
//           placeholder="email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//           whileFocus={{ scale: 1.02 }}
//         />
//       </motion.div>
//       <motion.div
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//       >
//         <label className="block text-sm font-medium text-gray-700">Enter Your Password</label>
//         <motion.input
//           type="password"
//            required
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
//           whileFocus={{ scale: 1.02 }}
//         />
//       </motion.div>
//       <motion.button
//         type="submit"
//         whileHover={{ scale: 1.05, backgroundColor: '#7C3AED' }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.2 }}
//         className="w-full cursor-pointer bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
//       >
//         Login
//       </motion.button>
//           {message && (
//             <p className="mt-3 text-center text-sm text-red-500">{message}</p>
//           )}
//     </form>
//   </motion.div>
// </div>
//     </div>
//   )
// }

// export default Login



import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState('');   
    
    const handleLogin = async(e) => {
       e.preventDefault();
       try {
        const res = await axios.post("http://localhost:3000/api/auth/login", {
          email, password
        }, { withCredentials: true });

        localStorage.setItem("token", res.data.token);
        setMessage(res.data.message || "Logged in successfully");
        
        setTimeout(() => {
          navigate("/notes");
        }, 1500);
       } catch (error) {
        console.log(error);
        setMessage(error?.response?.data?.message || "Something went wrong");
         setTimeout(() => {
          navigate("/register");
        }, 1500);
       }
    };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-600/10 filter blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-indigo-600/10 filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-1 bg-gradient-to-b from-cyan-400/30 via-transparent to-transparent"
            style={{
              left: `${25 * (i + 1)}%`,
            }}
            animate={{
              y: [-1000, 1000],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glassmorphic form card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white/5 backdrop-blur-2xl border border-cyan-400/30 border-b-cyan-200/40 border-r-cyan-200/40 p-8 rounded-3xl shadow-2xl shadow-cyan-500/20 w-full max-w-md"
      >
        {/* Form header with glowing effect */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-cyan-500/20 blur-lg rounded-lg"></div>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold text-center relative bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
          >
            LOGIN
          </motion.h1>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-cyan-200 mb-2">Enter Your Email</label>
            <motion.input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 shadow-lg shadow-cyan-500/10"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-cyan-200 mb-2">Enter Your Password</label>
            <motion.input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 shadow-lg shadow-cyan-500/10"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
          
          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.05, 
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)" 
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold p-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="mt-5 text-center text-white bg-gradient-to-r from-blue-700/40 to-cyan-600/40 p-3 rounded-xl backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-500/10"
            >
              {message}
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
