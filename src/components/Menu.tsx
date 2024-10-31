import { NavT } from "../App.tsx";
import Link from "../router/Link.tsx";

type PropT = {
  items: readonly NavT[];
};

const Menu = function ({ items }: PropT) {
  return (
    <ul
      className={
        "-mr-10 flex h-full items-center gap-10 bg-gray-500/5 px-12 font-barlowCondensed font-light uppercase tracking-widest backdrop-blur-2xl"
      }
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
