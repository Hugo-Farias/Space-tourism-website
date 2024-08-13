import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";

function App() {
  return (
    <div className={"flex justify-between m-6 h-10 bg-red-950/30"}>
      <a href={""}>
        <img className={"h-10 hover:invert"} alt="Logo" src={logo} />
      </a>
      <button>
        <img src={menu} alt="Open Menu" />
      </button>
    </div>
  );
}

export default App;
