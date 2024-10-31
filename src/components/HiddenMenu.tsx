import { AnimatePresence, motion } from "framer-motion";
import Link from "../router/Link.tsx";
import { NavT } from "../App.tsx";
import MenuButton from "./MenuButton.tsx";

type PropT = {
  isOpen: boolean;
  items: readonly NavT[];
  toggleMenu: () => void;
};

const Menu = function ({ isOpen, items, toggleMenu }: PropT) {
  return (
    <>
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, type: "just" }}
              key={"menu"}
            >
              <ul
                className={
                  "space-y-6 font-barlowCondensed text-lg uppercase tracking-widest"
                }
              >
                {items.map((item, index) => {
                  const isActive = item.path === window.location.pathname;
                  return (
                    <li key={index}>
                      <Link
                        className={`flex gap-3 ${
                          isActive ? "opacity-50" : "opacity"
                        }`}
                        to={item.path}
                        onClick={toggleMenu}
                      >
                        <span className={"font-bold"}>
                          {index.toString().padStart(2, "0")}
                        </span>
                        <h4 className={"font-light"}>{item.label}</h4>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <div
              onClick={toggleMenu}
              className={"fixed left-0 top-0 z-10 h-dvh w-dvw"}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
