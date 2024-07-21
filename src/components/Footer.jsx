// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-200 p-4 text-center">
      <p className="text-gray-800">© 2024 suno, Aisha! All rights reserved.</p>
      <div className="mt-2">
        <a href="/privacy" className="text-gray-800 mx-2">Privacy Policy</a>
        <a href="/terms" className="text-gray-800 mx-2">Terms of Service</a>
        <a href="/contact" className="text-gray-800 mx-2">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
