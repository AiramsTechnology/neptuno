import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="link del numerito" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 w-16 h-16 flex items-center justify-center"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsApp;
