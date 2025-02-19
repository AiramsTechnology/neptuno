
import ImgPrincipal from "./ImgPrincipal";
import CarouselProducts from "./CarouselProducts";
import Elegimos from "./Elegimos";

const Layout = () => {
  return (
    <div className="w-full max-w-screen">
      <div className="relative z-0">
        <ImgPrincipal />
      </div>
      <CarouselProducts />

      <Elegimos/>

    </div>
  );
};

export default Layout;