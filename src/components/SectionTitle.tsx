import { PropsWithChildren } from "react";

type PropT = {
  sectionNumber?: number;
} & PropsWithChildren;

const SectionTitle = function ({ sectionNumber, children }: PropT) {
  return (
    <div className={"flex items-center gap-4 font-barlowCondensed"}>
      {sectionNumber ? (
        <span className={"text-2xl font-semibold tracking-widest opacity-50"}>
          {sectionNumber.toString().padStart(2, "0")}
        </span>
      ) : (
        ""
      )}
      <h3 className={"text-2xl font-light uppercase"}>{children}</h3>
    </div>
  );
};

export default SectionTitle;
