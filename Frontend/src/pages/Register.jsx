 import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', { name, email, password });
      setMessage(res.data.message || 'Registered successfully');
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      console.log(error);
      setMessage(error?.response?.data?.message || 'Something went wrong');
          
      
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating crystal shapes */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 backdrop-blur-sm transform rotate-45 filter blur-md"
        animate={{ 
          y: [0, 25, 0],
          rotate: [45, 50, 45],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 backdrop-blur-sm transform rotate-12 filter blur-md"
        animate={{ 
          y: [0, -30, 0],
          rotate: [12, 20, 12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 backdrop-blur-sm transform -rotate-12 filter blur-md"
        animate={{ 
          y: [0, 20, 0],
          rotate: [-12, -20, -12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glassmorphic form card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 bg-white/5 backdrop-blur-2xl border border-cyan-400/30 border-b-cyan-200/40 border-r-cyan-200/40 p-10 rounded-3xl shadow-2xl shadow-cyan-500/20 w-full max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-extrabold text-center mb-8 tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        >
          REGISTER
        </motion.h1>

        <form onSubmit={handleRegister} className="flex flex-col space-y-5">
          <motion.input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 shadow-lg shadow-cyan-500/10"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 shadow-lg shadow-cyan-500/10"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg transition-all duration-300 shadow-lg shadow-cyan-500/10"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
            whileHover={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.05, 
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)" 
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold p-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Register
          </motion.button>
        </form>

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
      </motion.div>
    </div>
  );
};

export default Register;