import { ReactNode } from "react";
import usePathname from "./routerHooks/usePathname.ts";
// import { useAutoAnimate } from "@formkit/auto-animate/react";

type propT = {
  path: string;
  element: ReactNode;
};

const Route = function ({ path, element }: propT) {
  // const [animRef] = useAutoAnimate();
  const pathname = usePathname();

  return path === pathname ? element : null;
};

export default Route;
