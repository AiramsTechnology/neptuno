import { GoTriangleDown } from "react-icons/go";

const product = [
  {
    id: 1,
    name: "Pintura Epóxica",
    info: "Productos que acompañan en el resultado",
    img: "/ProductsCard/img1.webp",
    gradient: "linear-gradient(to bottom, rgba(255, 0, 0, 0.30), rgba(255, 0, 0, 0.45))", 
  },
  {
    id: 2,
    name: "Insumos",
    info: "Productos que acompañan en el resultado",
    img: "/ProductsCard/img2.webp",
    gradient: "linear-gradient(to bottom, rgba(0, 115, 245, 0.45), rgba(0, 115, 245, 0.45))", 
  },
  {
    id: 3,
    name: "Pintura para Barcos",
    info: "Productos que acompañan en el resultado",
    img: "/ProductsCard/img3.webp",
    gradient: "linear-gradient(to bottom, rgba(155, 226, 23, 0.55), rgba(155, 226, 23, 0.55))",
  },
  {
    id: 4,
    name: "Resina Epóxica",
    info: "Productos que acompañan en el resultado",
    img: "/ProductsCard/img4.webp",
    gradient: "linear-gradient(to bottom, rgba(255, 176, 30, 0.616), rgba(255, 176, 30, 0.678))", 
  },
];

function Productos() {
  return (
    <div className="place-items-center">
      <div className="mt-28">
        <p className="text-4xl font-bold text-center">PRODUCTOS</p>
        <div className="border-t-2 border-gray-800 my-5 lg:w-[120vh] md:w-[60vh] w-[35vh]"></div>      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 place-items-center m-16">
        {product.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-44  text-gray-50 p-5"
            style={{
              borderRadius: "25px",
              backgroundImage: `${product.gradient}, url(${product.img})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              backgroundBlendMode: "multiply", 
            }}
          >
            <div>
              <div className="absolute w-full left-0 p-3 bottom-0 duration-500 group-hover:-translate-y-10">
                <p className="text-2xl font-normal text-center">
                  {product.name}
                </p>
                <div className="mt-0">
                  <span className="flex justify-center items-center text-5xl group-hover:opacity-0 duration-300">
                    <GoTriangleDown />
                  </span>
                  <div className="group-hover:opacity-100 duration-500 opacity-0 group-hover:-translate-y-8 absolute -z-10 left-0 w-80 h-28 group-hover:bg-[#0f172a]/40 rounded-lg">
                    <p className="text-center text-white mx-10">
                      {product.info}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;