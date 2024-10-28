import { handleTabSelect, toUppercase } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";
import { useState } from "react";
import data from "../assets/doc/data.json";
import useImage from "../hooks/useImage.ts";
import { motion } from "framer-motion";
import Info from "../components/Info.tsx";

type DestinationT = {
  name: string;
  images: string;
  description: string;
  distance: string;
  travel: string;
};

const { destinations }: { destinations: DestinationT[] } = data;

const Destination = function () {
  const [tab, setTab] = useState<number>(0);
  const locale = destinations[tab];
  const imgSrc = useImage("destination", locale.images, "webp");

  return (
    <div className={"flex flex-col items-center gap-6 text-center"}>
      <SectionTitle sectionNumber={1}>Pick your destination</SectionTitle>

      {imgSrc ? (
        <motion.img
          className={"size-[10.6rem]"}
          key={imgSrc}
          initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 0, scale: 1.0 }}
          transition={{ duration: 1 }}
          src={imgSrc}
          alt={`${toUppercase(locale.name)}'s photo`}
        />
      ) : null}

      <ul
        className={
          "relative mt-1.5 flex h-7 font-barlowCondensed text-sm tracking-widest"
        }
      >
        {destinations.map((d, i) => {
          return (
            <li role={"tablist"} key={i}>
              <button
                data-id={i}
                className={`w-[4.125rem] pb-1 font-extralight uppercase tracking-[0.15rem] transition-colors hover:text-white`}
                onMouseDown={(e) => handleTabSelect(e, setTab)}
              >
                {d.name}
              </button>
            </li>
          );
        })}
        <div
          className={`absolute bottom-0 mx-4 w-8 rounded-md border-b-[0.18rem] will-change-transform`}
          style={{
            translate: `${66 * tab}px 0`,
            transition: "translate .5s",
          }}
        />
      </ul>

      <Info id={locale.name}>
        <h1 className={"font-bellefair text-6xl uppercase -tracking-wide"}>
          {locale.name}
        </h1>

        <p className={"text-[0.95rem] font-light leading-[1.56rem]"}>
          {locale.description}
        </p>

        <div
          className={
            "mt-8 flex flex-col justify-between gap-7 border-t border-white/20 pt-8"
          }
        >
          <div className={"flex flex-col gap-3"}>
            <h4
              className={
                "font-barlowCondensed text-sm font-light uppercase tracking-[0.15rem]"
              }
            >
              Avg. distance
            </h4>
            <p className={"font-bellefair text-2xl uppercase tracking-widest"}>
              {locale.distance}
            </p>
          </div>
          <div className={"flex flex-col gap-3"}>
            <h4
              className={
                "font-barlowCondensed text-sm font-light uppercase tracking-[0.15rem]"
              }
            >
              Est. travel time
            </h4>
            <p className={"font-bellefair text-2xl uppercase tracking-widest"}>
              {locale.travel}
            </p>
          </div>
        </div>
      </Info>
    </div>
  );
};

export default Destination;
