import logo from "../assets/shared/logo.svg";
// import menu from "../assets/shared/icon-hamburger.svg";
// import close from "../assets/shared/icon-close.svg";
import Link from "../router/Link.tsx";
import { useState } from "react";
import Menu from "./Menu.tsx";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"flex h-10 items-center justify-between"}>
      <Link className={"rounded-[50%]"} to={"/"}>
        <img
          className={"h-10 rounded-[50%] border border-stone-500 hover:invert"}
          alt="Logo"
          src={logo}
        />
      </Link>
      <button className={"flex gap-6"} onMouseDown={toggleMenu}>
        <Menu open={isOpen} />
      </button>
    </div>
  );
}

export default NavBar;
