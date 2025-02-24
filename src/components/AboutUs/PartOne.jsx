import React from "react";
import { FaStar } from "react-icons/fa";

const PartOne = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
      style={{ backgroundImage: "url('/nosotros.webp')" }}
    >

      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-5xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-6">QUIENES SOMOS</h2>

        <p className="text-center text-lg mb-8 leading-relaxed">
          Somos una empresa dinámica que se dedica a brindar servicios personalizados y soluciones de calidad. 
          Nuestro objetivo principal es ofrecer un servicio integral en mantenimiento de edificios (empresariales 
          y multifamiliares) y almacenes industriales, con el fin de prolongar la vida útil de los inmuebles. 
          Contamos con un plan integral que logra un impacto positivo en la gestión, asesoría y seguridad en beneficio 
          de los propietarios. Estamos seguros de que, con nuestros servicios, podemos transformar espacios en lugares ideales.
        </p>

        {/* Imagen pequeña y lista de valores */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Imagen de los círculos */}
      
      // imagen de ciruclos 

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaStar className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">CALIDAD</h3>
                <p>Brindamos un servicio integral con todos los estándares del mercado.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">GARANTÍA</h3>
                <p>Otorgar un valor agregado a todos nuestros servicios.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">AHORRO</h3>
                <p>Damos durabilidad con un servicio 360.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
