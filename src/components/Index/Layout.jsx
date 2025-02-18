import Navbar from "./Navbar";
import ImgPrincipal from "./ImgPrincipal";
import CarouselProducts from "./CarouselProducts";

const Layout = () => {
  return (
    <div>
      {/* Contenedor del Navbar con esquinas redondeadas */}
      <div className="absolute top-0 left-0 w-full z-10 ">
        <div className="bg-gradient-to-r from-[#00409A]/70 to-[#00409A]/70 rounded-full p-2 mx-2 mt-4 shadow-lg 
        border-20 border-white/30  ">
          <Navbar />
        </div>
      </div>

      <div className="relative z-0">
        <ImgPrincipal />
      </div>

      <CarouselProducts />
    </div>
  );
};

export default Layout;