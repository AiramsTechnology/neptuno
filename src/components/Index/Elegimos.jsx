import { useState } from "react";

const FeaturesSection = () => {
  const [selected, setSelected] = useState(null);
  const features = ["Durabilidad", "Calidad", "Tendencia", "Sostenibilidad", "Variedad", "Innovación"];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[70vh] bg-gradient-to-r from-[#00409A] to-[#D9D9D9] px-6 py-12">
      {/* Filtro Gooey Global */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Sección de texto */}
      <div className="w-full lg:w-1/3 max-w-[600px] text-center text-white mb-16 lg:mb-0 lg:mr-48">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg lg:text-xl">
          En nuestra tienda, entendemos que la pintura no es solo color, sino una forma de expresión y transformación.
          Dándole un toque único a tu negocio o emprendimiento en un nuevo proyecto, queremos acompañarte en cada paso
          con productos de la más alta calidad y un servicio excepcional.
        </p>
      </div>

      {/* Sección de botones con efecto gooey en un solo botón con borde negro y texto negro */}
      <div className="w-full lg:w-1/3 max-w-[500px] grid grid-cols-2 gap-6 lg:gap-8 justify-items-center">
        {features.map((feature) => (
          <button
            key={feature}
            className={`relative c-button c-button--gooey px-8 py-3 text-lg rounded-full transition-all w-full lg:w-[220px] text-center border-2 border-black bg-white text-black hover:bg-gray-200 overflow-hidden group`}
            onClick={() => setSelected(feature)}
          >
            {feature}
            {selected === feature && (
              <span className="c-button__blobs absolute inset-0 flex justify-center items-center overflow-hidden" style={{ filter: 'url(#goo)' }}>
                <div className="absolute w-full h-full bg-blue-500 animate-wave"></div>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Animación de ola */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%) skewX(-10deg);
          }
          50% {
            transform: translateX(0%) skewX(0deg);
          }
          100% {
            transform: translateX(100%) skewX(10deg);
          }
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          background: linear-gradient(90deg, #06c8d9 0%, #00409A 100%);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;
