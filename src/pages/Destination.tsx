import { setDataSection } from "../helper.ts";
import SectionTitle from "../components/SectionTitle.tsx";

const Destination = function () {
  setDataSection("destination");

  return (
    <div className={"mt-6 flex flex-col items-center gap-6 text-center"}>
      <SectionTitle sectionNumber={1}>Pick your destination</SectionTitle>
    </div>
  );
};

export default Destination;
