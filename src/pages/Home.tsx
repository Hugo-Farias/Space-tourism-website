import Link from "../router/Link.tsx";
import { setDataSection } from "../helper.ts";

const Home = function () {
  setDataSection("home");

  return (
    <div className={"flex flex-col items-center text-center"}>
      <h3
        className={
          "mb-2 mt-11 font-barlowCondensed uppercase tracking-[.168rem]"
        }
      >
        So, you want to travel to
      </h3>
      <h1
        className={
          "font-bellefair text-[4.7rem] uppercase tracking-wider text-white"
        }
      >
        Space
      </h1>
      <p className={"text-[0.95rem] font-light"}>
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
