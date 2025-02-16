import { GrClose } from "react-icons/gr";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  function openMenu(){
    setToggle(true);
  }
  function closeMenu(){
    setToggle(false);
  }

    return (
      <>
      <div>
      <div  className=" flex items-center justify-between p-2                                                                                                              
      lg:flex-row ">
        <div>
          <a href="#" className="text-white font-mono text-3xl
          tracking-wider flex items-center">NEPTUNO</a>
          </div>
        <div className="space-x-4">
          <div className="hidden lg:block space-x-2">
          <a href="#" className="text-white hover:bg-indigo-800
          rounded-full  px-5 py-2 text-xl">Inicio</a>
          <a href="#" className="text-white hover:bg-indigo-800
          rounded-full  px-5 py-2 text-xl">Nosotros</a>
          <a href="#" className="text-white hover:bg-indigo-800
          rounded-full  px-5 py-2 text-xl">Productos</a>
          <a href="#" className="text-white hover:bg-indigo-800
          rounded-full  px-5 py-2 text-xl">Contáctanos</a>
          </div>
          <div className="block lg:hidden">
            {toggle ? (
              <GrClose onClick={closeMenu} size={30} className="text-white"/>
            ):(<TfiMenu onClick={openMenu} size={30} className="text-white"/>)}
          </div>
        </div>
      </div>



      <div className="block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
          <ul>
            <li className="text-white  text-xl mb-2 
            cursor-pointer">Inicio</li>
            <li className="text-white  text-xl mb-2
            cursor-pointer">Nosotros</li>
            <li className="text-white  text-xl mb-2
            cursor-pointer">Productos</li>
            <li className="text-white  text-xl mb-2
            cursor-pointer">Contáctanos</li>
          </ul>
        </div>
        ):(
          <div></div>
        )}

        </div>
        </div>
      </>

    )
  }
  
  export default Navbar