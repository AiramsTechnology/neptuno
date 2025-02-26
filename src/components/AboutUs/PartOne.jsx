import React from "react";
import { FaStar } from "react-icons/fa";

const PartOne = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 sm:px-8"
      style={{ backgroundImage: "url('/nosotros.webp')" }}
    >
      <div className="p-6 sm:p-8 rounded-lg max-w-6xl mx-auto">
        {/* Línea superior */}
        <div className="border-t border-white mb-4"></div>

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">QUIENES SOMOS</h2>

        {/* Descripción */}
        <p className="text-center text-base sm:text-lg mb-4 sm:mb-6 mx-2 sm:mx-16 lg:mx-24 leading-snug">
          Somos una empresa dinámica que se dedica a brindar servicios personalizados y soluciones de calidad. 
          Nuestro objetivo principal es ofrecer un servicio integral en mantenimiento de edificios (empresariales 
          y multifamiliares) y almacenes industriales, con el fin de prolongar la vida útil de los inmuebles. 
          Contamos con un plan integral que logra un impacto positivo en la gestión, asesoría y seguridad en beneficio 
          de los propietarios. Estamos seguros de que, con nuestros servicios, podemos transformar espacios en lugares ideales.
        </p>

        {/* Línea inferior */}
        <div className="border-t border-white mt-4 mb-8"></div>

        {/* Imagen y lista de valores */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          {/* Imagen de los círculos */}
          <img
            src="/circulos.webp"
            alt="Calidad, Ahorro, Garantía"
            className="w-48 sm:w-56 lg:w-64 h-auto rounded-lg shadow-lg"
          />

          {/* Lista de características */}
          <div className="space-y-4 sm:space-y-6">
            {[
              { title: "CALIDAD", text: "Brindamos un servicio integral con todos los estándares del mercado." },
              { title: "GARANTÍA", text: "Otorgamos un valor agregado a todos nuestros servicios." },
              { title: "AHORRO", text: "Damos durabilidad con un servicio 360." }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4">
                <FaStar className="text-blue-500 text-2xl sm:text-3xl" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm sm:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
