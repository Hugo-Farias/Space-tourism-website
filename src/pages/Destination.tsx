import { setDataSection, toUppercase } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";
import { useState, MouseEvent } from "react";
import data from "../assets/doc/data.json";
import useImage from "../hooks/useImage.tsx";
import { motion } from "framer-motion";

type DestinationT = {
  name: string;
  images: string;
  description: string;
  distance: string;
  travel: string;
};

const { destinations }: { destinations: DestinationT[] } = data;

const Destination = function () {
  const [tabInd, setTabInd] = useState<number>(3);

  const destination = destinations[tabInd];

  const imgSrc = useImage("destination", destination.images, "png");

  setDataSection("destination");

  const handleClick = function (e: MouseEvent<HTMLButtonElement>) {
    const tgt = e.target as HTMLButtonElement;
    const id = Number(tgt.dataset.id);
    setTabInd(id);
  };

  return (
    <div className={"mt-6 flex flex-col items-center gap-6 text-center"}>
      <SectionTitle sectionNumber={1}>Pick your destination</SectionTitle>

      {imgSrc ? (
        <motion.img
          className={"size-[10.6rem]"}
          key={imgSrc}
          initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 0, scale: 1.0 }}
          exit={{ opacity: 0, rotate: 0, scale: 3 }}
          transition={{ duration: 1 }}
          src={imgSrc}
          alt={`${toUppercase(destination.name)}'s photo`}
        />
      ) : null}

      <ul
        className={
          "relative mt-1.5 flex h-7 font-barlowCondensed text-sm tracking-widest"
        }
      >
        {destinations.map((d, i) => {
          return (
            <div className={""} key={i}>
              <li role={"tablist"}>
                <button
                  data-id={i}
                  className={`w-[66px] pb-1 font-extralight uppercase tracking-[0.15rem] transition-colors hover:text-white`}
                  onMouseDown={handleClick}
                >
                  {d.name}
                </button>
              </li>
            </div>
          );
        })}
        <div
          className={`absolute bottom-0 mx-4 w-8 rounded-md border-b-[3px]`}
          style={{
            translate: `${64 * tabInd}px 0`,
            transition: "translate 0.3s ease-in-out",
          }}
        />
      </ul>

      <motion.div
        key={destination.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className={"font-bellefair text-6xl uppercase -tracking-wide"}>
          {destination.name}
        </h1>

        <p className={"text-[0.95rem] font-light leading-[1.56rem]"}>
          {destination.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Destination;
