import { useState } from "react";
import data from "../assets/doc/data.json";
import SectionTitle from "../components/SectionTitle.tsx";
import { motion } from "framer-motion";
import { handleTabSelect, toUppercase } from "../helper.ts";
import useImage from "../hooks/useImage.ts";

type TechnologyT = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

const { technology }: { technology: TechnologyT[] } = data;

const Technology = function () {
  const [tab, setTab] = useState<number>(0);
  const device = technology[tab];
  const imgSrc = useImage("technology", device.images.landscape, "jpg");

  return (
    <div className={"flex flex-col items-center gap-7"}>
      <SectionTitle sectionNumber={3}>Space Launch 101</SectionTitle>
      <div className={"w-dvw max-w-screen-sm"}>
        {imgSrc ? (
          <motion.img
            key={imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src={imgSrc}
            alt={`${toUppercase(device.name)}'s photo`}
          />
        ) : null}
      </div>
      <div className={"space-x-4"}>
        {technology.map((_, i) => {
          const isActive = i === tab;
          return (
            <button
              key={i}
              data-id={i}
              onMouseDown={(e) => handleTabSelect(e, setTab)}
            >
              <div
                data-id={i}
                className={`flex size-10 items-center justify-center rounded-full border border-white border-opacity-20 bg-white transition-colors duration-500 hover:border-opacity-100 ${isActive ? "bg-white text-black" : "bg-transparent"}`}
              >
                {i + 1}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
