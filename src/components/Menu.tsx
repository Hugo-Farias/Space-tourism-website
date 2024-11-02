import { NavT } from "../App.tsx";
import Link from "../router/Link.tsx";
import React, { useState } from "react";

type PropT = {
  items: readonly NavT[];
};

const Menu = function ({ items }: PropT) {
  const [tabPos, setTabPos] = useState<number>(70);
  const [tabWidth, setTabWidth] = useState(0);

  const onClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    const target = e.target as HTMLAnchorElement;

    console.log(target.offsetWidth);
    setTabPos(target.offsetLeft);
    setTabWidth(target.offsetWidth);
  };

  return (
    <ul
      className={
        "-mr-10 flex h-full items-center gap-10 bg-gray-500/5 px-12 font-barlowCondensed font-light uppercase tracking-widest backdrop-blur-2xl"
      }
    >
      {items.map((item, index) => (
        <li key={index} className={"flex w-20 justify-center"}>
          <Link to={item.path} onClick={onClick}>
            {item.label}
          </Link>
        </li>
      ))}
      <div
        className={`absolute bottom-0 rounded-md border-b-[0.18rem] will-change-transform`}
        style={{
          translate: `${tabPos - 48}px 0`,
          transitionProperty: "width translate",
          transitionDuration: "0.5s",
          width: `${tabWidth}px`,
        }}
      />
    </ul>
  );
};

export default Menu;
