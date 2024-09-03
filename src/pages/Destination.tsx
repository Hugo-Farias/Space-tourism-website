import { setDataSection, toUppercase } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";
import { useState } from "react";
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

const { destinations } = data;

const Destination = function () {
  const [destination, setDestination] = useState<DestinationT>(destinations[1]);

  const imgSrc = useImage("destination", destination.images, "png");

  setDataSection("destination");

  const handleClick = function (id: number) {
    setDestination(destinations[id]);
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
        className={"mt-1 flex h-7 font-barlowCondensed text-sm tracking-widest"}
      >
        {destinations.map((d, i) => {
          const isActive = d.name === destination.name;

          return (
            <div className={""} key={i}>
              <li role={"tablist"}>
                <button
                  className={`px-3 pb-1 font-extralight uppercase transition-colors hover:text-white ${isActive && ""}`}
                  onClick={() => handleClick(i)}
                >
                  {d.name}
                </button>
              </li>
              {isActive && (
                <div className={"mx-auto w-8 rounded-md border-b-[3px]"} />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Destination;
