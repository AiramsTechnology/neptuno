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
        <div class="border-t-2 border-gray-800 my-5 md:w-[100vh] w-[35vh]"></div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 place-items-center m-16">
        {product.map((product) => (
          <div
          className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-44 bg-zinc-700 text-gray-50 p-5"
          style={{ borderRadius: "25px" }}
        >
          <div key={product.id}>
            <div className="absolute w-full left-0 p-3 bottom-0 duration-500 group-hover:-translate-y-12">
              <p className="text-2xl font-normal text-center">{product.name}</p>
              <div className="mt-0"> 
                <span className="text-xl font-bold">Hover me!</span>
                <p className="group-hover:opacity-100  duration-500 opacity-0">
                  {product.info}
                </p>
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
