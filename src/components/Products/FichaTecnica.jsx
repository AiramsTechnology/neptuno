import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../../data/products';
import { PaintBucket, Ruler, Square, Droplet, PaintRoller } from 'lucide-react';

const FichaTecnica = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = categories
      .flatMap(category => category.items) // Unir todos los productos en un solo array
      .find(item => item.id === parseInt(productId)); // Buscar el producto correcto

    setProduct(foundProduct || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#062B65] text-white">
        <p className="text-xl mb-4">Producto no encontrado</p>
        <button
          onClick={() => navigate('/productos')}
          className="bg-white text-[#062B65] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Volver a productos
        </button>
      </div>
    );
  }

  // ✅ Función para descargar la ficha técnica
  const handleDownloadPDF = () => {
    if (product.pdf) {
      window.open(product.pdf, "_blank"); // Abre el PDF en una nueva pestaña
    } else {
      alert("No hay ficha técnica disponible para este producto.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#062B65] text-white p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Imagen centrada en el lado izquierdo */}
        <div className="flex justify-center items-center">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-72 h-72 rounded-lg object-cover" 
          />
        </div>

        {/* Detalles técnicos con mejoras */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <h2 className="text-xl font-semibold mb-3">Detalles técnicos:</h2>

          <div className="grid grid-cols-2 gap-2 w-full max-w-md">
            {[ 
              { icon: <Droplet size={25} />, label: "Acabado", value: product.ACABADO },
              { icon: <Ruler size={25} />, label: "Rendimiento", value: product.RENDIMIENTO },
              { icon: <Square size={25} />, label: "Pintado", value: product.PINTADO },
              { icon: <PaintBucket size={25} />, label: "Presentación", value: product.PRESENTACION },
              { icon: <PaintRoller size={25} />, label: "Aplicación", value: product.APLICACION }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#006699] p-3 rounded-2xl text-center flex flex-col items-center transition-transform duration-200 ease-in-out hover:scale-105 hover:brightness-110"
              >
                {item.icon}
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ✅ Botón para descargar la ficha técnica */}
          <button
            onClick={handleDownloadPDF}
            className="mt-4 bg-[#FFD700] text-[#062B65] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC107] transition"
          >
            Ficha Técnica
          </button>

          {/* Botón de regresar */}
          <button
            onClick={() => navigate('/Products/Productos')}
            className="mt-3 bg-white text-[#062B65] px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Volver a productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default FichaTecnica;
