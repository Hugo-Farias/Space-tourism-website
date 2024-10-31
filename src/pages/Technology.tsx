import { useState } from "react";
import data from "../assets/doc/data.json";
import SectionTitle from "../components/SectionTitle.tsx";
import { motion } from "framer-motion";
import { handleTabSelect } from "../helper.ts";
import useImage from "../hooks/useImage.ts";
import Info from "../components/Info.tsx";
import SectionDescription from "../components/SectionDescription.tsx";

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
      <motion.div
        key={imgSrc}
        className={
          "mb-2 min-h-44 w-dvw max-w-screen-sm bg-cover bg-center bg-repeat"
        }
        style={{ backgroundImage: `url(${imgSrc})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      />
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
                className={`flex size-10 items-center justify-center rounded-full border border-white border-opacity-20 transition-colors duration-500 hover:border-opacity-100 ${isActive ? "bg-white text-black" : "bg-transparent"}`}
              >
                {i + 1}
              </div>
            </button>
          );
        })}
      </div>
      <p
        className={
          "-mb-6 font-barlowCondensed font-thin uppercase tracking-widest text-white/80"
        }
      >
        The Terminology...
      </p>
      <Info id={device.name}>
        <div className={"text-center"}>
          <h2 className={"mb-3 font-bellefair text-2xl uppercase"}>
            {device.name}
          </h2>
          <SectionDescription>{device.description}</SectionDescription>
        </div>
      </Info>
    </div>
  );
};

export default Technology;
