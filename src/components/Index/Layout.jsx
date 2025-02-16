import Navbar from "./Navbar"
import ImgPrincipal from "./ImgPrincipal"
import CarouselProducts from "./CarouselProducts"

const Layout = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#00409A]/70 to-[#00409A]/70 rounded-lg p-4">
      <Navbar/>
      </div>
      
      <ImgPrincipal/>
      <CarouselProducts/>
    </div>
  )
}

export default Layout