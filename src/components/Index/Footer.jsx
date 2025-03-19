import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] py-8 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center border-b border-black pb-6 gap-[20px] lg:gap-[200px]">
        {" "}
        {/* 10 cm de separación */}
        <p className="text-center font-bold text-lg md:text-2xl lg:text-3xl leading-snug">
          PINTA CON LOS QUE SABEN PINTA CON
        </p>
        <div className="md:w-28 md:h-28 lg:w-auto l w-1/2 h-1/2 object-contain place-content-center">
          <img
            src="/logofooter.webp"
            alt="Logo footer"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center">
        <p className="text-sm md:text-base lg:text-lg mb-3 font-medium">
          Únete a nuestra comunidad
        </p>

        <div className="flex gap-6 mt-2">
          <a
            href="#"
            aria-label="Facebook"
            className="text-black hover:text-blue-600 text-2xl md:text-3xl"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-black hover:text-pink-500 text-2xl md:text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="text-black hover:text-green-500 text-2xl md:text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
