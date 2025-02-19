import { useState } from "react";

const FeaturesSection = () => {
  const [selected, setSelected] = useState("Durabilidad");

  const features = ["Durabilidad", "Calidad", "Tendencia", "Sostenibilidad", "Variedad", "Innovación"];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] bg-gradient-to-r from-[#00409A] to-[#D9D9D9] px-6 py-12">
      {/* Sección de texto - Aumentamos aún más el margen derecho en pantallas grandes */}
      <div className="w-full lg:w-1/3 max-w-[600px] text-center text-white mb-16 lg:mb-0 lg:mr-48">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">¿Por qué elegirnos?</h2>
        <p className="text-lg lg:text-xl">
          En nuestra tienda, entendemos que la pintura no es solo color, sino una forma de expresión y transformación.
          Dándole un toque único a tu negocio o emprendimiento en un nuevo proyecto, queremos acompañarte en cada paso
          con productos de la más alta calidad y un servicio excepcional.
        </p>
      </div>

      {/* Sección de botones - Sin cambios */}
      <div className="w-full lg:w-1/3 max-w-[500px] grid grid-cols-2 gap-6 lg:gap-8 justify-items-center">
        {features.map((feature) => (
          <button
            key={feature}
            className={`px-8 py-3 text-lg border-2 rounded-full transition-all w-full lg:w-[220px] text-center ${
              selected === feature
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-black border-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setSelected(feature)}
          >
            {feature}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;