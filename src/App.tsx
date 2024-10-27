import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./router/Route.tsx";
import Routes from "./router/Routes.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";

const nav = [
  { label: "Home", path: "/", number: 0 },
  { label: "Destination", path: "/destination", number: 1 },
  { label: "Crew", path: "/crew", number: 2 },
  { label: "Technology", path: "/technology", number: 3 },
] as const;

export type NavT = { label: string; path: PathsT; number: number };

export type PathsT = (typeof nav)[number]["path"];

function App() {
  return (
    <div className={"p-6"}>
      <NavBar nav={nav} />
      <Routes fallback={<h1 className={"mx-auto text-4xl"}>404</h1>}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/crew"} element={<Crew />} />
        <Route path={"/technology"} element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
