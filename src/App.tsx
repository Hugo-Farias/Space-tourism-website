import { useAutoAnimate } from "@formkit/auto-animate/react";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./router/Route.tsx";
import Routes from "./router/Routes.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";

function App() {
  const [animRef] = useAutoAnimate();

  return (
    <div ref={animRef} className={"m-6 flex flex-col"}>
      <NavBar />
      <Routes fallback={<h1 className={"mx-auto text-4xl"}>404</h1>}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/crew"} element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
