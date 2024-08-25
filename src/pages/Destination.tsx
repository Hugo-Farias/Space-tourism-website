import { setDataSection, toUppercase } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";
import { useState } from "react";
import data from "../assets/doc/data.json";
import useImage from "../hooks/useImage.tsx";

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

  // TODO: add animation
  const handleClick = function (id: number) {
    setDestination(destinations[id]);
  };

  return (
    <div className={"mt-6 flex flex-col items-center gap-6 text-center"}>
      <SectionTitle sectionNumber={1}>Pick your destination</SectionTitle>

      {imgSrc ? (
        <img
          className={"size-[10.6rem]"}
          src={imgSrc}
          alt={`${toUppercase(destination.name)}'s photo`}
        />
      ) : null}

      <ul
        className={
          "flex h-7 gap-4 font-barlowCondensed text-sm tracking-widest"
        }
      >
        {destinations.map((d, i) => {
          return (
            <li key={i}>
              <button
                className={"uppercase transition-colors hover:text-white"}
                onClick={() => handleClick(i)}
              >
                {d.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Destination;
