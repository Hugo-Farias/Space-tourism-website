import logo from "../assets/shared/logo.svg";
import Link from "../router/Link.tsx";
import { useState } from "react";
import MenuButton from "./MenuButton.tsx";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    document.body.style.overflow = isOpen ? "auto" : "hidden";

    setIsOpen(!isOpen);
  }

  return (
    <nav className={"z-10 flex h-10 items-center justify-between"}>
      <Link className={"rounded-[50%]"} to={"/"}>
        <img
          className={"h-10 rounded-[50%] border border-stone-500 hover:invert"}
          alt="Logo"
          src={logo}
        />
      </Link>
      <button className={"z-10 flex gap-6"} onMouseDown={toggleMenu}>
        <MenuButton open={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={
                "fixed right-0 top-0 h-screen w-64 rounded-bl-md rounded-tl-md border-y border-l border-white/15 bg-gray-500/5 backdrop-blur-xl backdrop-saturate-100"
              }
              initial={{ opacity: 1, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: "100%" }}
              transition={{ duration: 0.2 }}
              key={"menu"}
            />
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
