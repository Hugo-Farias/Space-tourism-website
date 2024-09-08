import { useAutoAnimate } from "@formkit/auto-animate/react";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./router/Route.tsx";
import Routes from "./router/Routes.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";

export type NavT = { label: string; path: string; number: number }[];

const nav: NavT = [
  { label: "Home", path: "/", number: 0 },
  { label: "Destination", path: "/destination", number: 1 },
  { label: "Crew", path: "/crew", number: 2 },
];

function App() {
  const [animRef] = useAutoAnimate();

  return (
    <div ref={animRef} className={"m-6 flex flex-col"}>
      <NavBar nav={nav} />
      <Routes fallback={<h1 className={"mx-auto text-4xl"}>404</h1>}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/crew"} element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
