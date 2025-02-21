import ImgPrincipal from "./ImgPrincipal";
import CarouselProducts from "./CarouselProducts";
import Elegimos from "./Elegimos";
import Colors from "./Colors";

const Layout = () => {
  return (
    <div className="w-full max-w-screen">
      <div className="relative z-0">
        <ImgPrincipal />
      </div>
      <CarouselProducts />
      <Elegimos />
      <Colors />
    </div>
  );
};

export default Layout;
