import { setDataSection, toUppercase } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";
import useImage from "../hooks/useImage.tsx";

type PropT = {
  destination: "moon" | "mars" | "europa" | "titan";
};

const Destination = function ({ destination }: PropT) {
  const { path, loading, error } = useImage(
    "destination",
    `image-${destination}`,
    "webp",
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  setDataSection("destination");

  return (
    <div className={"mt-6 flex flex-col items-center gap-7 text-center"}>
      <SectionTitle sectionNumber={1}>Pick your destination</SectionTitle>

      {path ? (
        <img
          className={"size-[10.6rem]"}
          src={path}
          alt={`${toUppercase(destination)}'s photo`}
        />
      ) : (
        <div className={"size-44 rounded-[50%] bg-white/20"}>
          {error ? error?.message : ""}
        </div>
      )}

      <ul className={"h-7"}>li*4</ul>
    </div>
  );
};

export default Destination;
