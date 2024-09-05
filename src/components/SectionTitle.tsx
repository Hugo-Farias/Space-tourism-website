import { PropsWithChildren } from "react";

type PropT = {
  sectionNumber?: number;
} & PropsWithChildren;

const SectionTitle = function ({ sectionNumber, children }: PropT) {
  return (
    <div className={"mt-6 flex items-center gap-4"}>
      {sectionNumber ? (
        <span className={"text-sm font-semibold tracking-widest opacity-50"}>
          {sectionNumber.toString().padStart(2, "0")}
        </span>
      ) : (
        ""
      )}
      <h3 className={"font-barlowCondensed uppercase tracking-[.17rem]"}>
        {children}
      </h3>
    </div>
  );
};

export default SectionTitle;
