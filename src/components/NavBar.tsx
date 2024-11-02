import logo from "../assets/shared/logo.svg";
import Link from "../router/Link.tsx";
import { useEffect, useState } from "react";
import { NavT } from "../App.tsx";
import { useMediaQuery } from "react-responsive";
import HiddenMenu from "./HiddenMenu.tsx";
import Menu from "./Menu.tsx";

type PropT = {
  nav: readonly NavT[];
};

function NavBar({ nav }: PropT) {
  const screenSm = useMediaQuery({ query: "( max-width: 639px )" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (screenSm) {
      setIsOpen(false);
    }
  }, [screenSm]);

  const toggleMenu = function () {
    if (!screenSm) {
      document.body.style.overflowY = isOpen ? "auto" : "hidden";
    }
    setIsOpen(!isOpen);
  };

  return (
    <nav className={"z-10 flex h-24 items-center justify-between"}>
      <Link className={"rounded-full"} to={"/"}>
        <img
          className={"hover: h-10 rounded-full border border-stone-500"}
          alt="Logo"
          src={logo}
        />
      </Link>

      {screenSm ? (
        <HiddenMenu isOpen={isOpen} items={nav} toggleMenu={toggleMenu} />
      ) : (
        <Menu items={nav} />
      )}
    </nav>
  );
}

export default NavBar;
