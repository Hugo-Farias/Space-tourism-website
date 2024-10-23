import Link from "../router/Link.tsx";
import SectionTitle from "../components/SectionTitle.tsx";

const Home = function () {
  return (
    <div className={"mt-6 flex flex-col items-center text-center"}>
      <SectionTitle>So, you want to travel to</SectionTitle>
      <h1
        className={
          "mt-1.5 font-bellefair text-[4.7rem] uppercase tracking-wider text-white"
        }
      >
        Space
      </h1>
      <p className={"mt-2.5 text-[0.95rem] font-light leading-[1.56rem]"}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <Link
        className={
          "mt-20 flex size-[9.37rem] items-center justify-center rounded-full bg-white font-bellefair text-[1.4rem] uppercase text-black"
        }
        to={"/technology"}
      >
        Explore
      </Link>
    </div>
  );
};

export default Home;
