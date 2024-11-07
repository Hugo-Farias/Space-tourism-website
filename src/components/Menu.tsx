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
  const [tabWidth, setTabWidth] = useState<number | null>(null);

  // document.body.style.overflowY = "scroll";

  useEffect(() => {
    items.forEach((item, index) => {
      const element = document.getElementById(`menu-${index}`);
      if (!element) return;

      if (!(item.path === pathname)) return;

      setTimeout(
        () => {
          setTabPos(element.offsetLeft);
          setTabWidth(element.offsetWidth);
        },
        tabWidth ? 0 : 200,
      );
    });
  }, [items, pathname, tabWidth]);

  return (
    <ul
      className={
        "-mr-10 flex h-full items-center gap-10 overflow-hidden bg-gray-500/5 px-12 font-barlowCondensed font-light uppercase tracking-[0.15em] backdrop-blur-2xl"
      }
    >
      {items.map((item, index) => {
        const isActive = item.path === pathname;
        return (
          <li key={index} id={`menu-${index}`} className={"h-full"}>
            <Link
              to={item.path}
              className={`flex h-full items-center justify-center hover:text-white ${isActive ? "text-white hover:cursor-default" : ""}`}
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
          transitionDuration: "0.5s",
          width: tabWidth ? `${tabWidth}px` : "100%",
        }}
      />
    </ul>
  );
};

export default Menu;
