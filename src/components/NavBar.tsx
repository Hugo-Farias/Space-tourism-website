import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import Link from "../router/Link.tsx";

function NavBar() {
  return (
    <div className={"flex h-10 justify-between"}>
      <Link className={"rounded-[50%]"} to={"/"}>
        <img
          className={"h-10 rounded-[50%] border border-stone-500 hover:invert"}
          alt="Logo"
          src={logo}
        />
      </Link>
      <button>
        <img src={menu} alt="Open Menu" />
      </button>
    </div>
  );
}

export default NavBar;