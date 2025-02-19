
import ImgPrincipal from "./ImgPrincipal";
import CarouselProducts from "./CarouselProducts";

const Layout = () => {
  return (
    <div className="w-full max-w-screen">
      <div className="relative z-0">
        <ImgPrincipal />
      </div>
      <CarouselProducts />

    </div>
  );
};

export default Layout;