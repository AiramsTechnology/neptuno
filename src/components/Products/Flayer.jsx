import { useLocation, useNavigate } from "react-router-dom";

function Flayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center text-xl mt-10 text-white">
        No se encontró el producto.
      </div>
    );
  }

  return (
    <div className="bg-[#006a80] min-h-screen flex flex-col items-center py-10 text-white">
      {/* Botón para volver atrás */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white text-[#006a80] px-4 py-2 rounded-lg font-semibold shadow-lg"
      >
        ⬅ Volver
      </button>

      {/* Título del producto */}
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

      {/* Contenedor principal */}
      <div className="max-w-5xl w-full bg-[#004f63] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        
        {/* Imagen del producto */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={product.img} alt={product.name} className="w-64 h-64 object-contain" />
        </div>

        {/* Información técnica */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-6 md:mt-0">
          {product.technit && product.technit.length > 0 ? (
            Object.entries(product.technit[0]).map(([key, value]) => (
              <div key={key} className="bg-[#00829a] p-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold">{key}</h2>
                <p className="text-base">{value}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-300 col-span-2">No hay información técnica disponible.</p>
          )}
        </div>
      </div>

      {/* Sección de descarga */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <span>📄</span> <span>FICHA TÉCNICA</span>
        </button>
        <button className="bg-orange-600 px-6 py-2 rounded-lg font-semibold flex items-center space-x-2">
          <span>📄</span> <span>FICHA DE SEGURIDAD</span>
        </button>
      </div>
    </div>
  );
}

export default Flayer;
