import logo from "../assets/shared/logo.svg";
import Link from "../router/Link.tsx";
import { NavT } from "../App.tsx";
import { useMediaQuery } from "react-responsive";
import HiddenMenu from "./HiddenMenu.tsx";
import Menu from "./Menu.tsx";

type PropT = {
  nav: readonly NavT[];
};

function NavBar({ nav }: PropT) {
  const screenSm = useMediaQuery({ query: "( max-width: 639px )" });

  return (
    <nav className={"z-10 flex h-24 items-center justify-between sm:mb-16"}>
      <Link className={"rounded-full"} to={"/"}>
        <img
          className={"hover: h-10 rounded-full border border-stone-500"}
          alt="Logo"
          src={logo}
        />
      </Link>

      {screenSm ? <HiddenMenu items={nav} /> : <Menu items={nav} />}
    </nav>
  );
}

export default NavBar;
