import React, { PropsWithChildren } from "react";

const SectionDescription: React.FC<PropsWithChildren> = function ({
  children,
}) {
  return (
    <p className={"text-[0.95rem] font-extralight leading-[1.56rem]"}>
      {children}
    </p>
  );
};

export default SectionDescription;
