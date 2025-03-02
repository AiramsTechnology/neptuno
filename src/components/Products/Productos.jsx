import { GoTriangleDown } from "react-icons/go";
import { useState } from "react";
import { categories } from "../../data/products";

function Productos() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar la animación de cierre

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsClosing(false); // Asegurarnos de que la animación de cierre no se active al abrir
  };

  const closeModal = () => {
    setIsClosing(true); // Iniciar la animación de cierre
    setTimeout(() => {
      setSelectedCategory(null); // Después de la animación, cerrar el modal
    }, 300); // Tiempo de la animación de cierre
  };

  return (
    <div className="place-items-center">
      <div className="mt-28">
        <p className="text-4xl font-bold text-center">PRODUCTOS</p>
        <div className="border-t-2 border-[#00409A] my-5 lg:w-[120vh] md:w-[60vh] w-[35vh]"></div>
      </div>

      {/* Grid de categorías */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 place-items-center m-16">
        {categories.map((category) => (
          <div key={category.id} className="w-80">
            {/* Cuadro principal de la categoría */}
            <div
              className="relative group cursor-pointer overflow-hidden duration-500 h-44 text-gray-50 p-5"
              style={{
                borderRadius: "25px",
                backgroundImage: `${category.gradient}, url(${category.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "multiply",
              }}
              onClick={() => openModal(category)}
            >
              <div>
                <div className="absolute w-full left-0 p-3 bottom-0 duration-500 group-hover:-translate-y-10">
                  <p className="text-2xl font-normal text-center">
                    {category.name}
                  </p>
                  <div className="mt-0">
                    <span className="flex justify-center items-center text-5xl group-hover:opacity-0 duration-300">
                      <GoTriangleDown />
                    </span>
                    <div className="group-hover:opacity-100 duration-500 opacity-0 group-hover:-translate-y-8 absolute -z-10 left-0 w-80 h-28 group-hover:bg-[#0f172a]/40 rounded-lg">
                      <p className="text-center text-white mx-10">
                        {category.info}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-lg w-[80vw] md:w-[50vw] transform transition-transform duration-300 ease-in-out ${
              isClosing ? "scale-95" : "scale-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedCategory.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✖
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCategory.items?.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center space-x-4 cursor-pointer p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00409A] hover:text-white shadow-lg`} // Agregar hover para el fondo azul
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <p className="font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productos;
