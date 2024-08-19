import Link from "../router/Link.tsx";
import { setDataSection } from "../helper.ts";

const Home = function () {
  setDataSection("home");

  return (
    <div className={"flex flex-col items-center gap-5 text-center"}>
      <h2 className={"uppercase tracking-widest"}>So, you want to travel to</h2>
      <h1 className={"font-bellefair text-8xl uppercase text-white"}>Space</h1>
      <p className={"text-[0.95rem]"}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <Link
        className={
          "mt-5 flex size-[150px] items-center justify-center rounded-[50%] bg-white font-bellefair uppercase text-black"
        }
        to={"/destination"}
      >
        Explore
      </Link>
    </div>
  );
};

export default Home;
