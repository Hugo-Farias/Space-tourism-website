import { NavT } from "../App.tsx";
import Link from "../router/Link.tsx";
import { useEffect, useState } from "react";
import usePathname from "../hooks/usePathname.ts";

type PropT = {
  items: readonly NavT[];
};

const Menu = function ({ items }: PropT) {
  const pathname = usePathname();
  const [tabPos, setTabPos] = useState(0);
  const [tabWidth, setTabWidth] = useState(462);

  useEffect(() => {
    items.forEach((item, index) => {
      const element = document.getElementById(`menu-${index}`);
      if (!element) return;

      if (!(item.path === pathname)) return;

      setTabPos(element.offsetLeft);
      setTabWidth(element.offsetWidth);
    });
  }, [items, pathname]);

  return (
    <ul
      className={
        "-mr-10 flex h-full items-center gap-10 overflow-hidden bg-gray-500/5 px-12 font-barlowCondensed font-light uppercase tracking-widest backdrop-blur-2xl"
      }
    >
      {items.map((item, index) => {
        const isActive = item.path === pathname;
        return (
          <li key={index} id={`menu-${index}`} className={"h-full"}>
            <Link
              to={item.path}
              className={`flex h-full items-center justify-center ${isActive ? "text-white" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <div
        className={`absolute bottom-0 border-b-[0.18rem] will-change-transform`}
        style={{
          translate: `${tabPos - 48}px 0`,
          transitionProperty: "width translate",
          transitionDuration: "0.7s",
          width: `${tabWidth}px`,
        }}
      />
    </ul>
  );
};

export default Menu;
