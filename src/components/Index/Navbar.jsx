import { GrClose } from "react-icons/gr";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; 

const Links = [
  {
    id: 1,
    link: "/",
    name: "Inicio",
  },
  {
    id: 2,
    link: "/AboutUs/Nosotros",
    name: "Nosotros",
  },
  {
    id: 3,
    link: "/Products/Productos",
    name: "Productos",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
     <div
  className="fixed bg-gradient-to-r from-[#00409A] to-[#00409A] rounded-full p-2 mt-5 shadow-lg 
             max-w-[calc(100%-2rem)] border-20 border-white/30 left-1/2 -translate-x-1/2 w-full"
>

        <div className="flex items-center justify-between lg:flex-row px-3">
          <div>
            <Link
              to="/"
              className="text-white font-mono text-3xl tracking-wider flex items-center"
            >
              <img src="/logo.webp" alt="Logo Neptuno" width={180} height={50} />
            </Link>
          </div>

          <div className="space-x-4">
            <div className="hidden lg:block space-x-10 pr-16">
              {Links.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  className={`text-white rounded-full px-5 py-2 text-xl menu__link ${
                    location.pathname === link.link ? "menu__link--active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="block lg:hidden">
              {toggle ? (
                <GrClose onClick={closeMenu} size={30} className="text-white" />
              ) : (
                <TfiMenu onClick={openMenu} size={30} className="text-white" />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {toggle && (
            <>
              {/* Menú modal */}
              <motion.div
                initial={{ x: -900, opacity: 0, height: 0 }} 
                animate={{ x: 0, opacity: 1, height: "200vh" }} 
                exit={{ x: -100, opacity: 0, height: 0 }} 
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-y-0 left-0 flex flex-col items-start p-5 z-50 w-full from-[#00409A]/80 to-[#00409A]/80 bg-gradient-to-r mt-[68px]"
              >
                <ul className="space-y-4 w-full">
                  {Links.map((link) => (
                    <li key={link.id} className="border-b border-white/60 pb-3">
                      <Link
                        to={link.link}
                        className="text-white text-xl text-center block p-3 rounded transition-all menu__link"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;