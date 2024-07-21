import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-pink-200 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">suno, Aisha!</h1>
      <nav className="flex-grow flex justify-center">
        <motion.div 
          className="flex space-x-6"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tracker">Tracker</NavLink>
          <NavLink href="/reminders">Reminders</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/profile">Profile</NavLink>
        </motion.div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-800 hover:text-pink-600 transition-colors duration-200">
    {children}
  </a>
);

export default Header;
