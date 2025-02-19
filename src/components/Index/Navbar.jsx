import { GrClose } from "react-icons/gr";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";

const Links = [
  {
    id: 1,
    link: "/",
    name: "Inicio",
  },
  {
    id: 2,
    link: "/Nosotros",
    name: "Nosotros",
  },
  {
    id: 3,
    link: "/Productos",
    name: "Productos",
  },
  {
    id: 4,
    link: "/Contactanos",
    name: "Contáctanos",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }

  
  return (
    <>
  <div>
    <div className="flex items-center justify-between lg:flex-row px-3">
      <div>
        <a
          href="/"
          className="text-white font-mono text-3xl tracking-wider flex items-center"
        >
          NEPTUNO
        </a>
      </div>

      <div className="space-x-4">
        <div className="hidden lg:block space-x-10 pr-16">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className={`text-white rounded-full px-5 py-2 text-xl menu__link ${
                location.pathname === link.link ? "menu__link--active" : ""
              }`}
            >
              {link.name}
            </a>
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

    <div className="block lg:hidden">
      {toggle ? (
        <div className="menu-square"> {/* Aplica la clase menu-square */}
          <ul className="text-center">
            {Links.map((link) => (
              <li
                key={link.id}
                className="text-white text-xl mb-4 cursor-pointer"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  </div>
</>
  );
};

export default Navbar;
