import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./Router/Route.tsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [animRef] = useAutoAnimate();

  return (
    <div ref={animRef} className={"m-6 flex flex-col"}>
      <NavBar />
      <Route path={"/"} element={<Home />} />
    </div>
  );
}

export default App;
