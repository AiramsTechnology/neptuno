const product = [
  {
    id: 1,
    name: "Pintura Epóxica",
    info: "Productos que acompañan en el resultado",
  },
  {
    id: 2,
    name: "Insumos",
    info: "Productos que acompañan en el resultado",
  },
  {
    id: 3,
    name: "Pintura para Barcos",
    info: "Productos que acompañan en el resultado",
  },
  {
    id: 4,
    name: "Resina Epóxica",
    info: "Productos que acompañan en el resultado",
  },
];
function Productos() {
  return (
    <div className=" place-items-center">
      <div className="mt-28">
        <p className="text-4xl font-bold text-center">PRODUCTOS</p>
        <div class="border-t-2 border-gray-800 my-5 lg:w-[100vh] w-[35vh]"></div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 place-items-center m-16">
        {product.map((product) => (
          <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
            <div key={product.id}>
              <p>{product.name}</p>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#64748b]"></div>
                <span className="text-xl font-bold">Hover me!</span>
                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                  {product.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
