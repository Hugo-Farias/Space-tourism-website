import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./router/Route.tsx";
import Routes from "./router/Routes.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";
import { ReactNode } from "react";

const nav = [
  { label: "Home", path: "/", comp: <Home /> },
  { label: "Destination", path: "/destination", comp: <Destination /> },
  { label: "Crew", path: "/crew", comp: <Crew /> },
  { label: "Technology", path: "/technology", comp: <Technology /> },
] as const;

export type NavT = { label: string; path: PathsT; comp: ReactNode };

export type PathsT = (typeof nav)[number]["path"];

function App() {
  return (
    <div className={"flex flex-col gap-6 p-6"}>
      <NavBar nav={nav} />
      <Routes fallback={<h1 className={"mx-auto text-4xl"}>404</h1>}>
        {nav.map(({ label, path, comp }) => (
          <Route key={label} path={path} element={comp} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
