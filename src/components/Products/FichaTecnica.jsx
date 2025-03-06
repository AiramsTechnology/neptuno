import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../data/products'; // Asegúrate de que la ruta sea correcta

const FichaTecnica = () => {
  const { productId } = useParams(); // Obtén el productId de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Product ID from URL:", productId); // Depuración
    console.log("Categories:", categories); // Depuración

    // Busca el producto en el array de categorías
    let foundProduct = null;
    categories.forEach(category => {
      const item = category.items.find(item => item.id === parseInt(productId));
      if (item) {
        foundProduct = item;
      }
    });

    console.log("Found Product:", foundProduct); // Depuración

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="p-8 mt-12">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.img} alt={product.name} className="w-64 h-64 rounded-lg mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Detalles técnicos:</h2>
      <ul className="space-y-2">
        <li className="bg-gray-100 p-4 rounded-lg">
          <strong>ACABADO:</strong> {product.ACABADO} <br />
          <strong>RENDIMIENTO:</strong> {product.RENDIMIENTO} <br />
          <strong>PINTADO:</strong> {product.PINTADO} <br />
          <strong>PRESENTACION:</strong> {product.PRESENTACION} <br />
          <strong>APLICACION:</strong> {product.APLICACION}
        </li>
      </ul>
    </div>
  );
};

export default FichaTecnica;