import { motion } from 'framer-motion';
import Logout from '../pages/Logout';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-md border-b border-cyan-400/30 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo/Title Section */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
        >
          Your Notes
        </motion.h1>

        {/* Logout Button */}
        <div className="flex items-center">
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;