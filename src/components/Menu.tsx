import { NavT } from "../App.tsx";
import Link from "../router/Link.tsx";
import React, { useEffect, useState } from "react";
import { comparePathName } from "../helper.ts";

type PropT = {
  items: readonly NavT[];
};

const Menu = function ({ items }: PropT) {
  const [tabPos, setTabPos] = useState(70);
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    items.forEach((item, index) => {
      const element = document.getElementById(`menu-${index}`);
      if (!element) return;

      if (!comparePathName(item.path)) return;

      setTabPos(element.offsetLeft);
      setTabWidth(element.offsetWidth);
    });
  }, [items]);

  const onClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
    const target = e.target as HTMLAnchorElement;

    setTabPos(target.offsetLeft);
    setTabWidth(target.offsetWidth);
  };

  return (
    <ul
      className={
        "-mr-10 flex h-full items-center gap-10 bg-gray-500/5 px-12 font-barlowCondensed font-light uppercase tracking-widest backdrop-blur-2xl"
      }
    >
      {items.map((item, index) => {
        return (
          <li key={index} id={`menu-${index}`} className={"h-full"}>
            <Link
              to={item.path}
              onClick={(e) => onClick(e)}
              className={"flex h-full items-center justify-center"}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
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
