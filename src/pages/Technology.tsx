import { useState } from "react";
import data from "../assets/doc/data.json";
import SectionTitle from "../components/SectionTitle.tsx";
import { motion } from "framer-motion";
import { toUppercase } from "../helper.ts";
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
  const imgSrc = useImage(
    "technology",
    "image-launch-vehicle-landscape",
    "jpg",
  );

  return (
    <div className={"flex flex-col items-center gap-7"}>
      <SectionTitle sectionNumber={3}>Space Launch 101</SectionTitle>
      <div className={"w-full"}>
        {imgSrc ? (
          <motion.img
            key={imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={imgSrc}
            alt={`${toUppercase(device.name)}'s photo`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Technology;
