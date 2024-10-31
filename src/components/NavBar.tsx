import logo from "../assets/shared/logo.svg";
import Link from "../router/Link.tsx";
import { useEffect, useState } from "react";
import { NavT } from "../App.tsx";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu.tsx";

type PropT = {
  nav: readonly NavT[];
};

function NavBar({ nav }: PropT) {
  const screenSm = useMediaQuery({ query: "( max-width: 640px )" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (screenSm) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [screenSm]);

  const toggleMenu = () => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    setIsOpen(!isOpen);
  };

  return (
    <nav className={"z-10 flex h-10 items-center justify-between"}>
      <Link className={"rounded-full"} to={"/"}>
        <img
          className={"hover: h-10 rounded-full border border-stone-500"}
          alt="Logo"
          src={logo}
        />
      </Link>

      {screenSm ? (
        <Menu isOpen={isOpen} items={nav} toggleMenu={toggleMenu} />
      ) : null}
    </nav>
  );
}

export default NavBar;
