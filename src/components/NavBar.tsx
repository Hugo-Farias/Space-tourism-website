import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import Link from "../router/Link.tsx";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"flex h-10 justify-between"}>
      <Link className={"rounded-[50%]"} to={"/"}>
        <img
          className={"h-10 rounded-[50%] border border-stone-500 hover:invert"}
          alt="Logo"
          src={logo}
        />
      </Link>
      <button onMouseDown={toggleMenu}>
        {isOpen ? (
          <img src={close} alt="Menu" />
        ) : (
          <img src={menu} alt="Open Menu" />
        )}
      </button>
    </div>
  );
}

export default NavBar;
