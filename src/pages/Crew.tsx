import SectionTitle from "../components/SectionTitle.tsx";
import data from "../assets/doc/data.json";
import { motion } from "framer-motion";
import { toUppercase } from "../helper.ts";
import { useState } from "react";
import useImage from "../hooks/useImage.tsx";

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

  const handleClick = function (e: MouseEvent) {
    const tgt = e.target as HTMLButtonElement;
    const id = Number(tgt.dataset.id);
    setTab(id);
  };

  return (
    <div className={"flex flex-col items-center gap-6"}>
      <SectionTitle sectionNumber={2}>Meet Your Crew</SectionTitle>

      <div className={"h-56 w-80 overflow-hidden"}>
        {imgSrc ? (
          <motion.img
            className={"mx-auto h-full"}
            key={imgSrc}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={imgSrc}
            alt={`${toUppercase(member.name)}'s photo`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Crew;
