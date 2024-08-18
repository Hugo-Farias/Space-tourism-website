import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Route from "./Router/Route.tsx";

function App() {
  return (
    <div className={"m-6 flex flex-col"}>
      <NavBar />
      <Route path={"/"} element={<Home />} />
    </div>
  );
}

export default App;
