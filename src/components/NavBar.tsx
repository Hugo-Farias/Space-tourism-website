import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import Link from "../Router/Link.tsx";

function NavBar() {
  return (
    <div className={"mb-12 flex h-10 justify-between"}>
      <Link to={"/"}>
        <img className={"h-10 hover:invert"} alt="Logo" src={logo} />
      </Link>
      <button>
        <img src={menu} alt="Open Menu" />
      </button>
    </div>
  );
}

export default NavBar;
