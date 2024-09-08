import logo from "../assets/shared/logo.svg";
import Link from "../router/Link.tsx";
import { useState } from "react";
import MenuButton from "./MenuButton.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { NavT } from "../App.tsx";

type PropT = {
  nav: NavT;
};

function NavBar({ nav }: PropT) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    document.body.style.overflow = isOpen ? "auto" : "hidden";

    setIsOpen(!isOpen);
  }

  return (
    <nav className={"z-10 flex h-10 items-center justify-between"}>
      <Link className={"rounded-full"} to={"/"}>
        <img
          className={"h-10 rounded-full border border-stone-500 hover:invert"}
          alt="Logo"
          src={logo}
        />
      </Link>
      <button className={"z-30"} onMouseDown={toggleMenu}>
        <MenuButton open={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={
                "fixed right-0 top-0 z-20 h-screen w-64 rounded-bl-md rounded-tl-md border-y border-l border-white/15 bg-gray-500/5 px-8 py-28 backdrop-blur-2xl"
              }
              initial={{ opacity: 1, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: "100%" }}
              transition={{ duration: 0.2 }}
              key={"menu"}
            >
              <ul
                className={
                  "space-y-6 font-barlowCondensed text-lg uppercase tracking-widest"
                }
              >
                {nav.map((item) => (
                  <li key={item.number}>
                    <Link className={"flex gap-3"} to={item.path}>
                      <span className={"font-bold"}>
                        {item.number.toString().padStart(2, "0")}
                      </span>
                      <h4 className={""}>{item.label}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div
              onClick={toggleMenu}
              className={"fixed left-0 top-0 h-screen w-screen"}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
