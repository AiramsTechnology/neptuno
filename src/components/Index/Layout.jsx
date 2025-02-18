import Navbar from "./Navbar"
import ImgPrincipal from "./ImgPrincipal"
import CarouselProducts from "./CarouselProducts"

const Layout = () => {
  return (
    <div>
      <div className="bg-[#00409a]  rounded-lg p-4 ">
      <Navbar/>
      </div>
      <ImgPrincipal/>
        <CarouselProducts/>
    </div>
  )
}

export default Layout