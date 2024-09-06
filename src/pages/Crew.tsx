import SectionTitle from "../components/SectionTitle.tsx";
import data from "../assets/doc/data.json";
import { motion } from "framer-motion";
import { handleTabSelect, toUppercase } from "../helper.ts";
import { useState } from "react";
import useImage from "../hooks/useImage.ts";

type CrewT = {
  name: string;
  images: string;
  role: string;
  bio: string;
};

const { crew }: { crew: CrewT[] } = data;

const Crew = function () {
  const [tab, setTab] = useState<number>(0);
  const member = crew[tab];
  const imgSrc = useImage("crew", member.images, "webp");

  return (
    <div className={"flex flex-col items-center gap-7"}>
      <SectionTitle sectionNumber={2}>Meet Your Crew</SectionTitle>

      <div
        className={"mb-0.5 h-56 w-80 overflow-hidden border-b border-white/20"}
      >
        {imgSrc ? (
          <motion.img
            className={"mx-auto h-full"}
            key={imgSrc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={imgSrc}
            alt={`${toUppercase(member.name)}'s photo`}
          />
        ) : null}
      </div>
      <div className={"mt-0.5 flex"}>
        {crew.map((_, i) => {
          const isActive = i === tab;
          return (
            <button
              key={i}
              data-id={i}
              onMouseDown={(e) => handleTabSelect(e, setTab)}
              className={"h-full w-[26px]"}
            >
              <div
                data-id={i}
                className={`mx-auto size-2.5 rounded-full bg-white transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-20"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
